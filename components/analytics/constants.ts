import { PathologyData, MetricDefinition } from './types';

export const PATHOLOGIES: PathologyData[] = [
  {
    id: 'dmla',
    name: 'DMLA',
    description: 'Dégénérescence Maculaire Liée à l\'Âge',
    detailedAnalysis: "Le logiciel recherche les drusens, les zones d'atrophie et les signes d'exsudation sur les images de fond d'œil et les coupes OCT. La détection précoce permet d'orienter rapidement vers un traitement anti-VEGF si nécessaire.",
    metrics: {
      sensitivity: 98.6,
      specificity: 98.9,
      auc: 0.999,
    },
    humanMetrics: {
      sensitivity: 85.0,
      specificity: 92.0,
    },
  },
  {
    id: 'dr',
    name: 'Rétinopathie Diabétique',
    description: 'Complication vasculaire du diabète',
    detailedAnalysis: "L'algorithme identifie les microanévrismes, les hémorragies rétiniennes et les exsudats. Il classe automatiquement le stade de sévérité selon l'échelle internationale, ce qui aide à décider si un traitement laser est indiqué.",
    metrics: {
      sensitivity: 99.6,
      specificity: 98.6,
      auc: 0.998,
    },
    humanMetrics: {
      sensitivity: 82.0,
      specificity: 95.0,
    },
  },
  {
    id: 'glaucoma',
    name: 'Glaucome',
    description: 'Neuropathie optique progressive',
    detailedAnalysis: "L'analyse porte sur le rapport excavation/papille (Cup/Disc) et l'épaisseur de la couche des fibres nerveuses (RNFL). Ces mesures permettent de repérer les cas suspects avant l'apparition de déficits au champ visuel.",
    metrics: {
      sensitivity: 89.5,
      specificity: 90.6,
      auc: 0.965,
    },
    humanMetrics: {
      sensitivity: 70.0,
      specificity: 85.0,
    },
  },
];

export const DEFINITIONS: MetricDefinition[] = [
  {
    term: "Sensibilité",
    simpleDefinition: "Capacité à détecter les vrais malades.",
    technicalDefinition: "Une sensibilité de 99% signifie que sur 100 patients atteints, 99 seront correctement identifiés. C'est essentiel pour ne pas rater de cas grave.",
  },
  {
    term: "Spécificité",
    simpleDefinition: "Capacité à rassurer les patients sains.",
    technicalDefinition: "Une haute spécificité évite les « faux positifs » et donc les examens complémentaires inutiles.",
  },
  {
    term: "AUC",
    simpleDefinition: "Note globale de l'algorithme sur 1.",
    technicalDefinition: "L'Aire Sous la Courbe (AUC) résume la capacité du modèle à distinguer malades et sains. Un score proche de 1 indique de bonnes performances.",
  },
];
