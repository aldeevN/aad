import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Введите валидный email-адрес")
        .required('Поле "Ваш e-mail" должно быть заполнено'),
    password: yup.string().trim().required("Пожалуйста введите ваш пароль").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Минимум 8 символов, должен включать цифры и латинские буквы")

});

export default schema;
