const createProduct = (
  id: string|number,
  isNew: boolean,
  stock?: number,
  ) =>{
  return {
    id,
    stock: stock || 14,
    isNew: isNew || true
  }
}
console.log(createProduct('2',true,2))
