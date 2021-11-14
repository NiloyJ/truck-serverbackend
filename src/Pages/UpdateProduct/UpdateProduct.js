import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
    const { productId } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch(`https://pure-garden-58524.herokuapp.com/update/${productId}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result.modifiedCount))
    };
    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() => {
        fetch(`https://pure-garden-58524.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])
    return (
        <div>
            <h2>Updated Name: {singleProduct.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue={singleProduct.name} {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("price", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;