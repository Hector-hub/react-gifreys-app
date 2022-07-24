function GifItem({ title, url }: ImagesProps) {
  return (
    <div className="img-container card">
      <img src={url} alt={title} />
     	
<a className="bottom" target="_blank" href={"https://api.whatsapp.com/send?text="+url} data-action="share/whatsapp/share">  <button >COMPARTIR</button>  </a>
   
    </div>
  );
}

export default GifItem;

//props interface
interface ImagesProps {
  id: string;
  title: string;
  url: string;
}
