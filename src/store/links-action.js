// import useLocalStorage from "../hooks/useLocalStorage"
// import { linksActions } from "./links-slice";
// import { uiActions } from "./ui-slice";

// export const fetchLinks = () => {
//  return async (dispatch)=>{
//     try {
//       const links= useLocalStorage("previewLinks", []);
//       dispatch(linksActions.addToPreviewLinks(links));
//       console.log(links);
//     } catch (error) {
//         console.log("error" ,error)
//         dispatch(
//           uiActions.showNotification({
//             type: "error",
//             open: true,
//             message:"Something went wrong!",
//           })
//         );
//     }
//  }
// }