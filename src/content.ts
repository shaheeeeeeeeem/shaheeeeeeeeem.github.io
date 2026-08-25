export const EMAIL: string = 'md.shaheem07@gmail.com'
export const GITHUB_URL: string = 'https://github.com/shaheeeeeeeeem'
export const LINKEDIN_URL: string = 'https://www.linkedin.com/in/mohamed-shaheem-71361a249/'
export const AIR_QUALITY_APP: string =
  'https://air-quality-forecasting-b33yzgtm36iyumuzwesxzj.streamlit.app/'
export const HIV_APP: string =
  'https://molecular-property-prediction-gnngit-kctmdvzbrbrhddr7bj4hr5.streamlit.app/'

export const NAME = 'Shaheem'
export const AFFILIATION = 'Mechanical & Aerospace Engineering @ IIT Hyderabad, 2024\u20132028'

export const ABOUT =
  'Third-year engineering student working in machine learning. Interested in retrieval systems, representation learning, and applied deep learning. Comfortable in PyTorch, Python, and C++.'

export type Role = {
  org: string
  title: string
  period: string
  detail: string
}

export const EXPERIENCE: Role[] = [
  {
    org: 'EigenAxis.ai',
    title: 'Machine Learning Intern',
    period: 'Present',
    detail:
      'RAG pipelines; built a custom encoder embedding model from scratch in PyTorch with multi-head attention.',
  },
]

export type Project = {
  name: string
  language: string
  href: string
  detail: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Code Comment Generation',
    language: 'Python / PyTorch',
    href: '',
    detail:
      'From-scratch Transformer vs. fine-tuned BART-large on CodeSearchNet Python. Caught a docstring leakage bug inflating ROUGE to ~0.98 and fixed it with AST-based stripping; honest ROUGE-L of 0.245 (BART) vs 0.219 (Transformer).',
  },
  {
    name: 'Air Quality Forecasting',
    language: 'Python / LightGBM',
    href: AIR_QUALITY_APP,
    detail:
      'LightGBM with walk-forward CV (365-day min train window, 30-day horizon, 39 folds per city) across five Indian cities on CPCB data. Holdout MAE 5.25\u201323.44, validated against OpenAQ. Deployed on Streamlit.',
  },
  {
    name: 'HIV Inhibition Prediction',
    language: 'Python / PyTorch Geometric',
    href: HIV_APP,
    detail:
      "GIN and GAT on OGB's ogbg-molhiv (test ROC-AUC 0.7598 / 0.7403), extended to the 128-task ogbg-molpcba (mean AP 0.2204 with a virtual node). Deployed on Streamlit.",
  },
]

export const SKILLS = [
  'Python',
  'PyTorch',
  'C++',
  'LightGBM',
  'scikit-learn',
  'PyTorch Geometric',
  'Transformers',
  'Streamlit',
  'Git',
  'Linux',
  'Docker',
  'SQL',
]
