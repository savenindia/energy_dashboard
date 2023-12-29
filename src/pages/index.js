import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Overview | Energy Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              sx={{ height: '100%' }}
              value="2089"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="28,234 rs"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              difference={20}
              positive
              sx={{ height: '100%' }}
              value="20"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={20}
              positive
              sx={{ height: '100%' }}
              value="7,058 rs"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
           {/*--------------------
           <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
           
           ---------------------------- */} 
            <OverviewSales
              chartSeries={[
                {
                  name: 'This week',
                  data: [43.2, 34.6, 45.1, 40.3, 39.7, 53.5, 45.7]
                },
                {
                  name: 'Last week',
                  data: [47.1, 30.6, 42.1, 61.3, 36.7, 56.5, 44.7]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[25, 42, 33]}
              labels={['Phase-1', 'Phase-2', 'Phase-3']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/appliances/geyser.png',
                  name: 'Geysers',
                  updatedAt: subHours(now, 1).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/appliances/ac.png',
                  name: 'Air Conditioners',
                  updatedAt: subHours(now, 8).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/appliances/light1.png',
                  name: 'Lighting',
                  updatedAt: subHours(now, 14).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/appliances/fridge.png',
                  name: 'Refrigerators',
                  updatedAt: subHours(now, 10).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/appliances/plug.png',
                  name: 'Plug Loads',
                  updatedAt: subHours(now, 23).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'TIP-001',
                  amount: 30.5,
                  customer: {
                    name: 'Turn off the geyser'
                  },
                  createdAt: 1703837147000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'TIP-002',
                  amount: 25.1,
                  customer: {
                    name: 'Turn off not-in-use Switches.'
                  },
                  createdAt: 1703837147000,
                  status: 'delivered'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'TIP-003',
                  amount: 10.99,
                  customer: {
                    name: 'Install LEDs'
                  },
                  createdAt: 1703837147000,
                  status: 'pending'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'TIP-004',
                  amount: 96.43,
                  customer: {
                    name: 'Install BLDC Fans'
                  },
                  createdAt: 1703837147000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'TIP-005',
                  amount: 32.54,
                  customer: {
                    name: 'Give A/C an annual tune up'
                  },
                  createdAt: 1703837147000,
                  status: 'delivered'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'TIP-006',
                  amount: 16.76,
                  customer: {
                    name: 'Keep your Fridge Full.'
                  },
                  createdAt: 1703837147000,
                  status: 'delivered'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
