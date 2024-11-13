import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
function Loading() {
    const {loading}=useSelector((store) => store.product);//bu store de bulunan producta denk gelen slicede bulununan initalStatelere erişerek oradaki değerleri çeker . Addcase ile yapılan işlemlerde loading değişiyor bu değişimle muiden aldığımız yükleme yaparken sayfada yükleme işareti çıkmasını sağlamış olduk. backdrop ile aratarak yaptık googlede.
  return (
   
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    
  )
}

export default Loading
