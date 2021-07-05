import {
  FacebookShareButton,
  VKShareButton,
} from "react-share";
import FacebookIcon from '@material-ui/icons/Facebook';
// import Button from '@material-ui/core/Button';


export default function ShareButton ({id}) {
  console.log(id);
  let url = `https://www.kinopoisk.ru/film/${id}`;
  return (
    <>
    <FacebookShareButton url={url} appId={3890689211157109}>
    {/* <FacebookIcon/> */}
    <button className="butOfScroll">Поделиться в FB</button>
    </FacebookShareButton>
    </>
  )
}
