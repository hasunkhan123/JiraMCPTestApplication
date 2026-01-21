export type JiraTicketSeed = {
  key: string;
  title: string;
  description: string;
  status: string;
  priority: string;
};

export const jiraMockTickets: JiraTicketSeed[] = [
  {
    key: "ECOM-101",
    title: "Add shipping estimator to cart",
    description:
      "Show a lightweight shipping estimator on the cart page based on zip code and cart weight.",
    status: "In Progress",
    priority: "High"
  },
  {
    key: "ECOM-102",
    title: "Improve product image zoom",
    description:
      "Replace the legacy zoom with a faster, touch-friendly magnifier on PDP.",
    status: "Backlog",
    priority: "Medium"
  },
  {
    key: "ECOM-103",
    title: "Add fraud review queue badge",
    description:
      "Surface a badge in the admin nav when fraud review items exceed 25.",
    status: "To Do",
    priority: "Low"
  }
];
