'use client';
import React from 'react';
import { ShieldCheckIcon, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './badge';
import { Button } from './button';
import { BorderTrail } from './border-trail';

export function Pricing() {
	return (
		<section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
			<div id="pricing" className="mx-auto w-full max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mx-auto max-w-2xl text-center mb-12 md:mb-16"
				>
					<span className="inline-block text-sm font-medium text-brand mb-3">
						Tarifs
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
						Une offre adaptée à <span className="text-gradient">vos besoins</span>
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg max-w-xl mx-auto">
						Nous proposons des solutions sur mesure pour les professionnels de santé et les établissements.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className="mx-auto w-full max-w-3xl"
				>	
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						{/* Pilote Card */}
						<div className="relative w-full rounded-2xl border border-border bg-background p-6 md:p-8 transition-shadow hover:shadow-lg">
							<div className="space-y-2 mb-6">
								<div className="flex items-center justify-between flex-wrap gap-2">
									<h3 className="text-xl font-semibold">Pilote</h3>
									<Badge variant="secondary" className="rounded-full">Essai</Badge>
								</div>
								<p className="text-muted-foreground text-sm">Testez en live sur quelques dossiers patients.</p>
							</div>
							
							<div className="mb-6">
								<span className="text-3xl md:text-4xl font-bold text-foreground">
									Gratuit
								</span>
							</div>

							<ul className="space-y-3 mb-8">
								{['Accès limité', 'Support par email', 'Documentation complète'].map((feature, i) => (
									<li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
										<Check className="h-4 w-4 text-brand flex-shrink-0" />
										{feature}
									</li>
								))}
							</ul>
							
							<Button className="w-full rounded-full" variant="outline" asChild>
								<a href="/contact">Nous contacter</a>
							</Button>
						</div>

						{/* Déploiement Card */}
						<div className="relative w-full rounded-2xl border-2 border-brand bg-background p-6 md:p-8 transition-shadow hover:shadow-lg hover:shadow-brand/10">
							<BorderTrail
								style={{
									boxShadow:
										'0px 0px 60px 30px rgba(45, 212, 191, 0.3), 0 0 100px 60px rgba(45, 212, 191, 0.2)',
								}}
								size={100}
							/>
							<div className="absolute -top-3 left-1/2 -translate-x-1/2">
								<Badge className="bg-brand text-brand-foreground rounded-full px-3">Recommandé</Badge>
							</div>
							
							<div className="space-y-2 mb-6 mt-2">
								<div className="flex items-center justify-between flex-wrap gap-2">
									<h3 className="text-xl font-semibold">Déploiement</h3>
									<Badge className="rounded-full bg-brand/10 text-brand border-brand/20">Complet</Badge>
								</div>
								<p className="text-muted-foreground text-sm">Pour une intégration totale.</p>
							</div>
							
							<div className="mb-6">
								<span className="text-3xl md:text-4xl font-bold text-foreground">
									Sur Devis
								</span>
							</div>

							<ul className="space-y-3 mb-8">
								{['Accès illimité', 'Support prioritaire', 'Formation personnalisée', 'Intégration sur mesure'].map((feature, i) => (
									<li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
										<Check className="h-4 w-4 text-brand flex-shrink-0" />
										{feature}
									</li>
								))}
							</ul>
							
							<Button className="w-full rounded-full bg-brand hover:bg-brand/90 text-brand-foreground" asChild>
								<a href="/contact">Demander un devis</a>
							</Button>
						</div>
					</div>

					<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8">
						<ShieldCheckIcon className="h-4 w-4 text-brand" />
						<span>Accès à toutes les fonctionnalités sans frais cachés</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
