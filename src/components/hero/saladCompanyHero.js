import React, { useState } from "react";
import styled from "styled-components";

import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/plus-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";

const Container = tw.div`relative mb-6 -mx-6 px-8 py-4 lg:py-4`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-2 md:py-2 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const LeftColumn = tw(Column)`mb-2 md:w-6/12 flex-shrink-0 relative`;
const RightColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-2 my-2`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

// const Container = tw.div`relative flex flex-row justify-center -mb-2 -mx-8 px-8 py-4 lg:py-4`;
// const TwoColumn = tw.div`flex flex-col w-full lg:flex-row md:items-center max-w-screen-xl mx-auto py-4 md:py-4`;
// const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
// const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-row sm:flex-row justify-around lg:justify-around mt-8`;
const PrimaryButton = tw.button`font-bold my-4 px-8 lg:px-10 my-4 py-3 rounded bg-green-700 text-gray-100 hocus:bg-green-900 focus:shadow-outline focus:outline-none transition duration-300`;
// const WatchVideoButton = styled.button`
//   ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-green-500 focus:outline-none`}
//   .playIcon {
//     ${tw`stroke-1 w-12 h-12`}
//   }
//   .playText {
//     ${tw`ml-2 font-medium`}
//   }
// `;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl md:w-6/12 flex-shrink-0 relative lg:max-w-none`;
//const IllustrationContainer = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 flex-shrink-0 relative`
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;
const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
  heading = "Modern React Templates, Just For You",
  description="Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText="Get Started",
  primaryButtonUrl="#",
  watchVideoButtonText="Watch Video",
  watchVideoYoutubeUrl="https://www.youtube.com/embed/_GuOjXYl5ew",
  imageSrc=DesignIllustration,
  imageCss=null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>             
              <div className="m-2 p-7">
              <PrimaryButton className="m-2" as="a" href="/selectsalad">Our menu</PrimaryButton>
              
              </div>
              <div className="p-2">
              <PrimaryButton className="m-2" as="a" href='/makesalad'>
                Make your salad                
              </PrimaryButton>
              
              </div>
              
              {/* <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton> */}
            </Actions>
          </LeftColumn>
          <RightColumn>
          <Image css={null} src={imageSrc} imageBorder={false} imageShadow={false} imageRounded={true}/>

            {/* <IllustrationContainer>
            {/* <video autoPlay loop muted
            style= {imageCss}> 
            <source src={saladVideo} type="video/mp4"/>
            </video>  */}
            
              {/* <img
                css={imageCss}
                src={imageSrc}
                alt="Hero"
              /> */}
              {/* {imageDecoratorBlob && <DecoratorBlob2 />} */}
            {/* </IllustrationContainer> */}
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
  );
};
