

const useTelegram =()=> {
    const tg = window.Telegram.WebApp
    const onClose = () =>{
        tg.close()
      }

      const onToggleButton = () =>{
      tg.MainButton.isVisible
      ? tg.MainButton.hide() 
      : tg.MainButton.show();

      
      }
    return{
        onToggleButton,
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id
    }
}

export default useTelegram