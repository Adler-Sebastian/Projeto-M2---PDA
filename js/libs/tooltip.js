const tooltips = [
  {
    id: "#dashboard",
    config: {
      placement: "right",
      content: "Dashboard",
    },
  },
  {
    id: "#relatorios",
    config: {
      placement: "right",
      content: "Relatórios",
    },
  },
  {
    id: "#graph",
    config: {
      placement: "right",
      content: "Gráficos",
    },
  },
  {
    id: "#team",
    config: {
      placement: "right",
      content: "Time",
    },
  },
  {
    id: "#conf",
    config: {
      placement: "right",
      content: "Configurações",
    },
  },
  {
    id: "#quit",
    config: {
      placement: "right",
      content: "Sair",
    },
  },
];

tooltips.forEach((item) => {
  tippy(item.id, item.config);
});
