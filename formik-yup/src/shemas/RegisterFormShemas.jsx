import * as yup from 'yup';

export const RegisterFormYup= yup.object().shape({
    email: yup.string().email("geçerli E-mail giriniz!").required("Email is required"),
    age: yup.number().required("Age is required").integer("Tam sayı giriniz").positive("pozitif bir yaş giriniz."),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password")]),
    term: yup.boolean().required("Kutucuğu onaylayınız.").oneOf([true], "Kullanıcı sözleşmesini onaylamanız gerekiyor."),
})