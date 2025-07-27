import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const useAuthStore = create((set, get) => ({
  formData: {
    userType: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    location: '',
    category: ''
  },

  error: '',
  isLoading: false,
  isAuthenticated: false,
  user: null,

  // ✅ Set individual form field
  setField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value
      }
    })),

  // ✅ Reset form after registration
  resetForm: () =>
    set({
      formData: {
        userType: '',
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        location: '',
        category: ''
      },
      error: ''
    }),

  // ✅ Set custom error
  setError: (message) => set({ error: message }),

  // ✅ Register user (backend sends OTP via Twilio)
  registerUser: async () => {
    const { formData } = get();
    set({ isLoading: true, error: '' });

    const formattedPhone = formData.phone.startsWith('+')
    ? formData.phone
    : `+91${formData.phone}`;

 
const { confirmPassword, ...dataToSend } = {
    ...formData,
    phone: formattedPhone
  };


    try {
      const response = await axios.post(
        `${API_URL}/register`,
        dataToSend,
        { withCredentials: true }
      );

      set({ isLoading: false });
      return response.data;

    } catch (error) {
      console.error("Register error:", error);
      set({
        error: error.response?.data?.message || 'Registration failed',
        isLoading: false
      });
      throw error;
    }
  },

  // ✅ Verify OTP after registration
  verifyPhone: async (otp) => {
    set({ isLoading: true, error: '' });

    try {
      const { formData } = get();
      const phone = formData.phone.startsWith('+')
          ? formData.phone
          : `+91${formData.phone}`;

      const response = await axios.post(
          `${API_URL}/verify-otp`,
          { phone, otp },
          { withCredentials: true }
      );

      set({
        user: response.data.user || null,
        isAuthenticated: true,
        isLoading: false
      });

      return response.data;

    } catch (error) {
      console.error("Verify OTP error:", error);
      set({
        error: error.response?.data?.message || 'OTP verification failed',
        isLoading: false
      });
      throw error;
    }
  }
}));





























// import { create } from 'zustand';

// export const useRegisterStore = create((set) => ({
//   formData: {
//     userType: '',
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     businessName: '',
//     location: '',
//     category: ''
//   },
//   error: '',

//   setField: (field, value) =>
//     set((state) => ({
//       formData: { ...state.formData, [field]: value }
//     })),

//   resetForm: () =>
//     set({
//       formData: {
//         userType:'',
//         fullName: '',
//         email: '',
//         phone: '',
//         password: '',
//         confirmPassword: '',
//         businessName: '',
//         location: '',
//         category: ''
//       },
//       error: ''
//     }),

//   setError: (message) => set({ error: message })



//   export const verifyPhone: async (otp)=>{
//          set ({isLoading:true, error:null})
//          try{
//             const phone=get().phone
//             console.log(" Phone number being used for verification:", phone);
// console.log("OTP being used:", otp);
//              const response = await axios.post(`${API_URL}/phoneAuthentication`, {phone,otp},
//                 {withCredentials:true}
//              );
//              set ({user:response.data.user, isAuthenticated:true, isLoading:false, email})
//              return response.data
//          }
//          catch(error){
//              set ({error:error.response?.data?.error||"Error verifying email" ,isLoading:false})
//              throw error;
 
//          }
//      },
// }));

 