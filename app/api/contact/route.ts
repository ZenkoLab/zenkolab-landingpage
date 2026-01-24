import { NextResponse } from 'next/server';
import { EmailClient } from "@azure/communication-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, company, role, subject, message } = body;

    const connectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
    const senderAddress = process.env.AZURE_SENDER_EMAIL;
    const recipientAddress = process.env.RECIPIENT_EMAIL;

    if (!connectionString || !senderAddress || !recipientAddress) {
      throw new Error("Configuration Azure manquante (Connection String, Sender ou Recipient)");
    }

    const client = new EmailClient(connectionString);

    const emailMessage = {
      senderAddress: senderAddress,
      content: {
        subject: `Nouveau contact Zenkolab : ${subject}`,
        plainText: `
          Nouveau message de contact reçu via le site web.
          
          De: ${firstname} ${lastname}
          Email: ${email}
          Entreprise: ${company}
          Rôle: ${role}
          
          Message:
          ${message}
        `,
        html: `
          <html>
            <body>
              <h1>Nouveau message de contact</h1>
              <ul>
                <li><strong>Nom:</strong> ${firstname} ${lastname}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Entreprise:</strong> ${company}</li>
                <li><strong>Rôle:</strong> ${role}</li>
                <li><strong>Sujet:</strong> ${subject}</li>
              </ul>
              <h2>Message:</h2>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </body>
          </html>
        `,
      },
      recipients: {
        to: [{ address: recipientAddress }],
      },
    };

    const poller = await client.beginSend(emailMessage);
    
    // On attend la confirmation pour être sûr que l'email est parti (évite les erreurs silencieuses)
    const result = await poller.pollUntilDone();

    if (result.status === "Succeeded") {
      return NextResponse.json({ success: true, message: "Message envoyé avec succès" });
    } else {
      throw new Error(`L'envoi a échoué avec le statut: ${result.status}`);
    }
  } catch (error: unknown) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      { 
        success: false, 
        message: "Une erreur est survenue lors de l'envoi",
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
