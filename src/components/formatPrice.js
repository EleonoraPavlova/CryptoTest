export default function formatPrice(price) {
  //красота вывода прайса

  if (price === "-") {
    return price;
  }
  price = +price;
  return price > 1 ? price.toFixed(2) : price.toPrecision(2);
}
// просто файлы регистрировать не нужно, только компоненты
