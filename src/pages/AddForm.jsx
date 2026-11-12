import { useForm } from "react-hook-form";


export default function AddProduct() {
    const {
        register, // פונקצית הרשמה
        handleSubmit, // action בעת שליחת הטופס - כמו
        formState: { errors, dirtyFields, isValid }, // מצב הטופס
    } = useForm({
        defaultValues: { name: "", price: 0 }, // ערכי ב"מ
    });


    const myOnSubmit = (data) => {
        debugger
        console.log(data); // {a:1, b:2}
        console.log(errors);
        
    }


    return (
        <form onSubmit={handleSubmit(myOnSubmit)}>

            <label htmlFor="pr">price:</label>
            <input type="number" name="" id="pr"
                {...register('price', { min: 0, max: 100 })}
            />
            <p>{errors.price && 'חייב להיות בין 0 ל 100'}</p>
            <p>{errors.price.type === "min" && "min invalid"}</p>

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", { required: "Email is required", minLength: 5 })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}

            <button type="submit">Submit</button>
        </form>
    )
}