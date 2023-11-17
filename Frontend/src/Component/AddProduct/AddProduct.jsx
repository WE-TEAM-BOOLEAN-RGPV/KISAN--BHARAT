import React, { useEffect, useState } from "react";

import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProduct } from "../../Redux/action/Product";

const AddProduct = () => {
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [brand, setBrand] = useState("");
  const [minQuantity, setMinQuantity] = useState("");
  const [totalStock, setTotalStock] = useState("");
  const [isBurgainPossible, setIsBurgainPossible] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/product");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData();

    newForm.append("name", name);
    newForm.append("company", company);
    newForm.append("price", price);
    newForm.append("cuisine", cuisine);
    newForm.append("brand", brand);
    newForm.append("minQuantity", minQuantity);
    newForm.append("totalStock", totalStock);
    newForm.append("isBurgainPossible", isBurgainPossible);
    newForm.append("color", color);
    newForm.append("description", description);
    newForm.append("tags", tags);
    dispatch(
      addProduct({
        name,company,price,cuisine,brand,minQuantity,totalStock,isBurgainPossible,color,description,tags,
      })
    );


  };

  return (
    <div className=" w-full ">
      <section className="flex justify-center items-center h-full mx-auto mt-10">
        <div className="w-[70%] bg-white rounded-lg shadow-md p-8 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <Input
                  label="Name*"
                  type="Text"
                  placeholder="Enter the product Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Company Name*"
                  type="Text"
                  placeholder="Enter the Fpo Name"
                  required
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-4">
                <Input
                  label="Price Of Product"
                  type="Number"
                  placeholder="Price Per Kg"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                  label="Cuisine"
                  type="Text"
                  placeholder="eg: Indian"
                  required
                  onChange={(e) => setCuisine(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-4">
                <Input
                  label="Brand"
                  type="Text"
                  placeholder="eg: Jagriti"
                  required
                  onChange={(e) => setBrand(e.target.value)}
                />
                <Input
                  label="min quantity"
                  type="Text"
                  placeholder="eg: 50kg"
                  required
                  onChange={(e) => setMinQuantity(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-4">
                <Input
                  label="Total Stock"
                  type="Text"
                  placeholder="Total Stock in kg"
                  required
                  onChange={(e) => setTotalStock(e.target.value)}
                />
                <Input
                  label="Bugrain Possible"
                  type="Text"
                  placeholder="yes or no"
                  required
                  onChange={(e) => setIsBurgainPossible(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-4">
                <Input
                  label="Color"
                  type="Text"
                  placeholder="Color of Product"
                  required
                  onChange={(e) => setColor(e.target.value)}
                />
                <Input
                  label="#Tags"
                  type="Text"
                  placeholder="Tag for better Reach"
                  required
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div>
                <label className="inline-block mb-1 pl-1">Description*</label>
                <textarea
                  cols="30"
                  required
                  rows="8"
                  type="text"
                  name="description"
                  className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                  placeholder="Enter your product description..."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex gap-6 justify-end">
                <input
                  type="submit"
                  value="Create Product"
                  className="w-[20%] px-6 py-3 mt-4 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"

                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
