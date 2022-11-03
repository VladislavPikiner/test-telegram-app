const tg = window.Telegram.WebApp;

export const useTelegram = () =>{
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
        user: tg.initDataUnsafe?.user
    }
}