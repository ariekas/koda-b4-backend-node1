const productModels = require("../models/product.model");

function listProducts(req, res) {
  try {
    const products = productModels.arrProducts;
    if (products.length > 0) {
      res.status(201).json({
        success: true,
        message: "Getting List Products",
        data: products,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Error: Product Not Found",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function detailProduct(req, res){
    try {
        const product = productModels.detail(Number(req.params.id));
        if (!product){
            res.status(404).json({
                success:false,
                message:"error: product not found"
            })
        }else{
            res.status(201).json({
                success:true,
                message:"success get detail product",
                data: product
            })
        }
    } catch (error) {
        
    }
}

function CreateProduct(req, res) {
  try {
    const newProduct = req.body;
    const product = productModels.create(newProduct);
    res.status(201).json({
      success: true,
      message: "success create product",
    });
  } catch (error) {
    console.log(error);
  }
}

function EditProduct(req, res) {
  try {
    const updated = productModels.edit(req.body, Number(req.params.id));

    if (!updated) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(201).json({
      message: "success edit product",
      data: updated,
    });
  } catch (error) {
    console.log(error);
  }
}

function deleteProduct(req, res){
    try {
        const product = productModels.deleteProduct(Number(req.params.id))

        if (!product){
            return res.status(404).json({
                message: "Product not found",
              });
        }else{
            return res.status(201).json({
                message: "susscess product deleted",
              });
        }
    } catch (error) {
        
    }
}

module.exports = {
  listProducts,
  CreateProduct,
  EditProduct,
  detailProduct,
  deleteProduct
};
