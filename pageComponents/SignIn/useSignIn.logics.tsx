// lib
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

// next
import { useRouter } from "next/router";

// validation
// import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./SignIn.validate";

// types
import { FormSignInValues } from "./SignIn.types";


const useSignIn = () => {
    const { register, handleSubmit, setError, formState: { errors, isValid }, reset } = useForm<FormSignInValues>({
        mode: "onChange", resolver: (validationSchema),
    });

    const router = useRouter();

    const onSubmitHandler = async (data: FormSignInValues) => {

        try {
            const response = await signIn("credentials", {
                redirect: false,
                ...data,
            });

            if (!response?.ok) {
                console.log(response)
                throw new Error();
            }

            router.push("/home");
        } catch (error) {
            console.log(error);
            String(error).replace("Error: ", "") === "Cannot read properties of undefined (reading '0')" &&
                setError('email', { type: 'custom', message: 'Данные неверны либо аккаунт нужно подтвердить' });
        }
    };

    return {
        register, onSubmitHandler, handleSubmit, errors, isValid
    };
};

export default useSignIn;
