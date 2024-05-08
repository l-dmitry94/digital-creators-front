import CustomForm from "../CustomForm/CustomForm";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";

const AddCard = () => {
    return (
        <div></div>
        // <CustomForm
        //     initialValues={initialValues}
        //     validationSchema={validationSchema}
        //     buttonText={'Add'}
        // >
        //     {formik => (
        //         <div className={scss.inputContainer}>
        //             <div>
        //                 <CustomInput
        //                     type="title"
        //                     name="title"
        //                     placeholder="Title"
        //                     value={formik.values.title}
        //                     onChange={formik.handleChange}
        //                     onBlur={formik.handleBlur}
        //                     className={scss.emailInput}
        //                 />
        //                 {formik.errors.title && formik.touched.title && (
        //                     <div>{formik.errors.title}</div>
        //                 )}
        //             </div>
        //             <div className={scss.textareaBlock}>
        //                 <CustomTextarea
        //                     name="description"
        //                     placeholder={'Description'}
        //                     value={formik.values.description}
        //                     onChange={formik.handleChange}
        //                     onBlur={formik.handleBlur}
        //                 />
        //                 {formik.errors.description && formik.touched.description && (
        //                     <div>{formik.errors.description}</div>
        //                 )}
        //             </div>
        //         </div>
        //     )}
        // </CustomForm>
    );
}

export default AddCard;