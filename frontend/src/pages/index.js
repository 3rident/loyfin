import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import Dashboard from 'sections/dashboard';
import Happyness from 'sections/happyness';
import Subscribe from 'sections/subscribe';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="LoyFin A Loyalty Finance Company"
          description="A Universal loyalty financing and distributing platform"
        />
        <Banner />
        <Support />
        <Dashboard />
        <Happyness />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
