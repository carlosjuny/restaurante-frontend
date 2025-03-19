import styled from 'styled-components'
import Image from '../../atoms/Image'
import img1 from '../../../../assets/images/public/promotions_1.png'
import img2 from '../../../../assets/images/public/promotions_2.png'
import img3 from '../../../../assets/images/public/promotions_3.png'
import img4 from '../../../../assets/images/public/promotions_4.png'
import img5 from '../../../../assets/images/public/promotions_5.png'
import img6 from '../../../../assets/images/public/promotions_6.png'
import promoVideo from '../../../../assets/video/RestaurantVideo.mp4'

const PromotionStyle = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 80px;
    justify-items: center;
    padding: 30px;

    img {
        width: 350px;
        margin: auto;
        box-shadow: 8px 8px 4px 3px rgba(0, 0, 0, 0.589);
    }

@media (min-width: 768px) {
    grid-template-columns: repeat(2, 2fr);
    margin-bottom: 100px;

    img {
        width: 487px;

        &:hover {
            scale: 1.02;
            transition: .3s ease;
            cursor: pointer;
        }
    }

@media (min-width: 1440px) {
        grid-template-columns: repeat(3, 2fr);
    }
}
`
const VideoContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    video {
        width: 80%;
        max-width: 1000px;
        border-radius: 3px;
        box-shadow: 8px 8px 4px 3px rgba(0, 0, 0, 0.589);
        margin-bottom: 100px;
    }
`;

const PromotionsSection_1 = () => {
  return (
    <>
            <PromotionStyle>
                <Image img={img1} alt="Promotion 1" />
                <Image img={img2} alt="Promotion 2" />
                <Image img={img3} alt="Promotion 3" />
                <Image img={img4} alt="Promotion 4" />
                <Image img={img5} alt="Promotion 5" />
                <Image img={img6} alt="Promotion 6" />
            </PromotionStyle>
            <VideoContainer>
                <video controls>
                    <source src={promoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </VideoContainer>
        </>
  )
}

export default PromotionsSection_1
