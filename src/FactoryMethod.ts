interface IProduct {
  platform: string
}
class GenericProduct implements IProduct {
  platform = 'generic'
  constructor() {
    console.log(`A instance is created for ${this.platform}`)
  }
  say() {
    console.log(`A instance is created for ${this.platform}`)
  }
}

class WixProduct extends GenericProduct {
  platform = 'Wix'
  constructor() {
    super() //typescriptだと継承している限り必要（親にconstructorがあるかは関係ない）。コンストラクタの一番上である必要がある
    console.log(`A instance is created for ${this.platform}`)
    this.say()
  }
}

class ShopifyProduct extends GenericProduct {
  platform = 'shopify'
  constructor() {
    super()
    console.log(`A instance is created for ${this.platform}`)
  }
}

interface ICreator {
  FactoryMethod(): IProduct
  hello(): void
}
class Creator implements ICreator {
  platformClass: Map<string, () => IProduct>
  constructor(public platform: string) {
    this.platformClass = new Map([
      ['wix', () => new WixProduct()],
      ['shopify', () => new ShopifyProduct()],
    ])
  }
  FactoryMethod(): IProduct {
    return this.getInstance()
  }
  getInstance(): IProduct {
    const getter = this.platformClass.get(this.platform)
    return getter ? getter() : new GenericProduct()
  }
  hello() {
    console.log('private')
  }
}

class Logic {
  public creator: ICreator
  constructor(creator: ICreator) {
    this.creator = creator
  }
  do() {
    console.log('create product by factory')

    const product: IProduct = this.creator.FactoryMethod()
  }
}

function main() {
  const logic = new Logic(new Creator('wix'))
  logic.do()
}

export default main()
