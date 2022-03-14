import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/features.js";
import MainFeature from "components/features/mainFeature.js";
import MainFeature2 from "components/features/mainFeature2";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-green-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-2xl w-auto`;
  return (
    <AnimationRevealPage>
       <Hero
        heading={<>Salad Company <HighlightedText>By Freshia</HighlightedText></>}
        description="Make your own salad. We'll deliver it fresh to you, everyday."
        imageSrc="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Our salads"
        watchVideoButtonText="Make your own?"
      />
     
      <MainFeature
        heading={
          <>But why?</>           
        }
        subheading={<Subheading>.. abs are made in the kitchen</Subheading>}
        description={
          <Description>
            Eating salad a day is the best thing you can do to your health. 
            <br />
            <br />
            Yet, it can be hard. You have to keep a batch of sprouts, stock fresh vegetables, wash and slice them.. 
            <br />
            <br />
           With us, you don't have to do any of this! <br /> You do the eating, we do the rest.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Explore"
        imageSrc={
          "https://media1.popsugar-assets.com/files/thumbor/WVP2q_qMJdvLo0belzUWCpwncUM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/11/104/n/1922729/d03cb05bb77c8e39_GettyImages-1158451240/i/Abs-Are-Made-in-Kitchen-What-Does-It-Mean.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={false}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      /> */}
      <Features
        heading={
          <> Our commitment
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Freshly sourced",
            description: "Our ingredients are sourced each morning, prepared only by order.",
            url: "#"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Team of health nerds",
            description: "We're obsessed with eating clean, picking fresh, and avoiding synthetic.",
            url: "#"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Easy subscription",
            description: "Plan different salads ahead, we'll get them at your doorstep, hassle-free.",
            url: "#"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Make your own salad",
            description: "Become your own Salad Chef, choose from our 150+ items in our groceries.",
            url: "#"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Inexpensive",
            description: "Only ₹180 per meal for two. Discounts on repeat subscriptions and referrals.",
            url: "#"
          }
          ,
          {
            imageSrc: celebrationIconImageSrc,
            title: "Sustainably packed",
            description: "Delivered in eco-friendly or reuseable packaging. No plastic creation",
            url: "#"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Testimonial
        subheading=""
        heading={<>From our subscribers</>}
      />
      <MainFeature2
        heading={<>Start this week..</>}
        statistics={[
          {
            key: "Orders",
            value: "1000+",
          },
          {
            key: "Ingredients",
            value: "150+"
          },
          {
            key: "Repeat subscriptions",
            value: "100%"
          }
        ]}
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://i.ibb.co/1KfJTb9/220-SM467908.jpg"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={false}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
}
