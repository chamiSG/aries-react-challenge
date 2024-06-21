export const defaultChartOptions: any = {
  legend: {
    show: false,
  },
  theme: {
    mode: "light",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    style: {
      fontSize: "14px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
  },
  grid: {
    show: false,
  },
 
}

export const formatPrice = (price: number, locale: string = 'en-US') => {
  return Intl.NumberFormat(locale, {style: 'currency', currency: 'USD'}).format(price);
}