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
    id: "#graficos",
    config: {
      placement: "right",
      content: "Gráficos",
    },
  },
  {
    id: "#time",
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
