import {
  FacebookShareButton,
  VKShareButton,
} from "react-share";

export default function ShareButton () {
  let url = "https://github.com/";
  return (
    <>
    <FacebookShareButton url={url} appId={3890689211157109}>
      Поделиться в FB
    </FacebookShareButton> <br/>
    <VKShareButton url={url}>
      Поделиться в VK
    </VKShareButton>
    </>
  )
}
