import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Open Source AI/ML in 3D: Measuring our past, monitoring our present, and mapping our future."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Immersive 3D Avatars for Digital Communication" overTitle="Intelligent Agents">
            <p>
            With Atlas Avatars, you can take your digital interactions to a whole new level. From e-learning to product demos, corporate training to customer service, Atlas Avatars provide the perfect platform for sharing knowledge and providing an engaging experience to users. Enhance your brand with Atlas Avatars and provide users with an engaging, authentic experience that they will never forget.{' '}
              <Link href="/help-center">At AtlasFoundation.AI, we understand that communication is key to success in any industry.</Link> This is why we have developed Atlas Avatars, the next generation of AI-powered communication tools that provide an entirely new dimension to communication. Our avatars seamlessly blend human-like features with advanced artificial intelligence to deliver an immersive experience that engages and captivates your audience.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="AtlasFoundation.AI's state-of-the-art Avatars." overTitle="Bring your brand to life with" reversed>
            <p>
            Our Avatars are tailored to your needs and are fully customizable to represent your unique brand identity.
              <strong>With our Avatars, you can offer an unparalleled digital experience to potential clients, customers, and partners.</strong> Our Avatars provide an innovative and personalized platform for digital communication, allowing you to showcase your products and services with ease.
            </p>
            <ul>
              <li>AI-Powered Conversational Interfaces</li>
              <li>Computer Vision and Machine Learning Algorithms</li>
              <li>Personalized Consultation Services</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
