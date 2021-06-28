import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    color: "purple",
    borderRadius: "5%",
  },

});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="fucking card"
          height="100%"
          image="https://kinopoisk-ru.clstorage.net/H1y7n0086/9ad347Kf/nbpzZ5bCtYNDfxYMCsZePh300Z9V6jnu7efJxpe0JOMppLz0qiYR5kh1igzY8FcJKGh7kWnyTML8AXKz_BFGOyl-Vkb2x0Eipj9j6PtGfs5t8DU61ftoCmjTiBeiscER2qY_1j0EchTKd0wYvOQGfK1tn5AsJ7iHLbATtNqQZ_uPKVB0BLNFlKD_xkiIdh_dfgYE3Rc77L4vxGyHRaVnUwunLQQsd_OmuQd-yd-1oh1fvl5TzaY7xcowApeZ5MfJn0izFlZS5TeD7ZWZa0cNzwzkFm7F-m9_3oYdlUd3xJGr501UrKbCBqinztpslHBffcz_Uk41a8bZMfHmu7YnGw1b8bdXUJaXEy1liYg0zY0M96e_pro9zYzWH_UH9cQjKSc99ywUo4bJV294_6XiDk7PT8N_9-gVC6FgJEuGFTuu-TJnxCMmpgIO98qo1H6uPIZ2LiTbbDwdNr5XdkXkIwo3f4UO5xHUu3StWa0UQi68jT-TvOerxzjyUqZ6BITYDSiSJiQzhoSzLEZoKSZtji-2xG-nS45OvfUeNkVXxCJ7Ru5FX1TTRfum_tjtxNA-Ty8OQdzEevd4wSLVqXQFSm3LQWaWQxW1c58lykvELhwchcT-1dk_rr303SU0VUcQClUv9uxmkBQ4ZOxJPzdgvw9879Heh6gm6EGjZEsUhQnNKFG29AMV58DPlXmrxSzsPRXUHrX57Zws5R0EdifmUJp3D2YtVYCnykesea20Q608Xz3yv_fpVQryA7Q7lfVq79mzpPYRh6bBTbRr6sa-XX2X5w61O8wMbLa-VGRk1oD4JqymjEfQRIh3TKmNNtKur80vMz-HOZc7Y_AWiwdGqs8ZcwdEY1RFgX8nago2Xf4dhdcN5Mpfro2E3FcEdiQhCvWuRS5ko_Yqd76JH2cz_58NvyFeh7lH6PIhdUkXV8k9GnGExLD0hjPeBnq55W3cHeTUHWTbPA5flLxlNqYWkNnVPyU8tRMUutR-Sd6lQc6_LlxB3PYrpsszQ7a4BpaaXUuTlKRDpcYy_vYLeeVvrC6FJV4liB19zIQOF3fWt7C6dq9VvMbjlhr3X1l9VuK875xvEf1GuYSqcACEGiVmmA6YIWdHUfYlEw51W6okD6y9V2dv9ho9n52m3zYUZWVyOPds9ixn4DdLNv-K_bQSXTy__4GvtHn26vPwZ7pktQs_ejOndsKnFeH9RFgq994tbPQ2PfQZvw7td_4GV1XEsMnmHQbMxrNXeTUdqP33QD49XZ_TzZSq5bgAQWX7pTVK7guSVmVwxBeAD7aqW2Uebp4nFWwVOR6evPX_9pWUlCELFl7WPhSxpXiW3Dt8pxGNX61dwbx0i1SY8EGle9c06b9Jo0YH8-YH8S3Gq4s2rgxuldU_F4lNn4zlLhbHdKZyynTPZN3EcKQK17-4z8fgDk1NDXIt1AkF2UCxphm1B3rNO4Bl51KWVRFs1GrIFd6tfAW2T9dbDpxNRl5GFYW3gzjXjJav15AX-1f8O5yVYr4OzP5AD5UZJduhUGXIJlXp3XhRhYWylRXxX-ZpS8U-DRwlZC3miY4f_tetB3R11wO4Nn8GXOQSt9o3nXktF5PuLc3dkX-mqvcpwaOkCcRWiu6L02S2k-YVwd0Fe_tl3A0PtXYtpDmMnv-H39dFpqVwucT-9Ky2w7S4Vo64vpXSX41Mf_AMpklH6AKy12r2lRv92gGVRHF2xwNdphj5ZQ6_PudkbsaL3-z9lC_GxBQ2gakFX0aOtKIV-tXsaJ6UAd5svb2RrhUaxWlAEIdplJdrj9mBxJRj9SfhLFdIGUReruykxGw1i72OHxRtVjdmtNEYd37UDtfx1Vil_bl_1yBef4__EixF-SdoM_AUG1VEeG0KgEWUQ3anUP31ygoWDm6eNNdNdUk_P6wWT8Z2N0QgmtZvJo9kUZRrZNzZbtWQbI_fzROv1CnnynHz1lkUl1hsiVMWZ3Pn5bLuZrgrty_O79c3vNdJHSxeJJ-EZnaWoln0P5T8FDME23WuCE024L9M7P3jnCQK9MuR4UdoRJSofYuy1kRR9uSwrgYoWjQOjn0npk-l60xMDRQcRpe2RPBqJq-FP_RD9Cklfrm_ZgA9Hc88AF4Va5SrobBFaiYVyl06smREMdf0g_xGmanGfF4s98dt5cssn5_m_TQXplThS7QPB0xWYnTqF557D4eTr73dHAI9Rwk2qSIghkrERfvN2FGFVECmNDA_xhnLh--tPIfkLSepXo2dVS4UVkW00YnHrwV8FkAlWrePeK61Mh6sXH8hPDVK5RjTQ2a5xgSYbplDJBdQ5oey3aXr-hVujL9kVU9nKPxP3rYPBqcFl1GKNX0ErnZBFLqU35t_5kOtfGzvk92lSxYbcCA3qfcG-a2b8UVEkVb3w910a4kkL01-tCcdJMsdTl-XH_SXhUWSu9ZvJ05Vs5V6tZ35HUfxz1y-HGOuRQjVikHC1euH9AnuqEMk5BF2p2PuJeraVoyP_vYUTzTq7m-Mxd1FB_dFc6k3vOW-t7C3eJeOGJzG8M5Pnf0DfeQo1dmjQtVr9OUpDTnz1KQy9bcTzjX5aicsfk2FBn3Gmw0-zBWcloVGt0DaFV60j8RgdBuWnFhNhfGeDU4tUW7keBfoYeCFuQaEOlyokiXWYqZWkQwmmGumLg491gTstVk-Tf00n5ZXpESC6jSsxt_3grbphl7JrucRHw_eX5J9dbk1SYOQFArnJPpNOrG2d_LWFMP9hRrJdc18b7QWbIS57j4Pxj4G5xRG0omnHJZeF4KWuPV_yZ0UEa9NbF3jf-YI56rTcEXJFedJ_rqRllRS58aDvhfb23Xszcz2Z-zE6l9eL6f8ZQfWNXMYJj8VbVfSlAuVX9scBwG-vmxvwG4GSSXJgXHGqecmOu670iTH8ebF0-30CEtnzE69J9VtpepdnF03HLbXxZawGvaMhkxn4cToZE9YbgTwbv9cbjHdpVv2GaFyk#DSD"
          title="Contemplative Reptile"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  );
}
