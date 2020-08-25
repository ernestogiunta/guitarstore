import React, { Component } from "react";
import PageHeader from "./PageHeader";
import InfoCard from "../InfoCard";
import BigCard from "./BigCard";
import Product from "../Product";
import Category from "../Category";

async function getProducts() {
  const getResult = await fetch("http://localhost:3001/api/products");
  const productResult = await getResult.json();
  console.log(productResult);
  return productResult;
}
async function getUsers() {
  const getResult = await fetch("http://localhost:3001/api/users");
  const userResult = await getResult.json();
  return userResult;
}
async function getProductTypes() {
  const getResult = await fetch("http://localhost:3001/api/productTypes");
  const productTypeResult = await getResult.json();
  return productTypeResult;
}

class PageContent extends Component {
  state = { products: [], users: [], productTypes: [], featuredProduct: null };
  async updateState() {
    console.log("updating state");
    const products = await getProducts();
    this.setState({
      featuredProduct: products[products.length - 1],
      products,
    });
    const users = await getUsers();
    this.setState({
      users,
    });
    const productTypes = await getProductTypes();
    this.setState({
      productTypes,
    });
  }

  stateInterval = null;
  componentDidMount() {
    this.updateState();
  }

  render() {
    const productCount = this.state.products.length;
    const userCount = this.state.users.length;
    const productTypeCount = this.state.productTypes.length;
    return (
      <div className="container-fluid">
        <PageHeader />
        <div className="row">
          <InfoCard
            title="Productos en Base de Datos"
            color="primary"
            value={productCount}
            icon="fa-user"
          />
          <InfoCard
            title="Usuarios en Base de Datos"
            color="danger"
            value={userCount}
            icon="fa-video"
          />
          <InfoCard
            title="Tipos de producto en Base de Datos"
            color="info"
            value={productTypeCount}
            icon="fa-cat"
          />
        </div>
        <div className="row">
          <BigCard title="Featured Movie">
            <Product product={this.state.featuredProduct} />
          </BigCard>
          <BigCard title="Genres in Database">
            <div className="row">
              {this.state.productTypes.map((productype) => {
                return <Category key={productype.id} name={productype.name} />;
              })}
            </div>
          </BigCard>
        </div>
      </div>
    );
  }
}

export default PageContent;
