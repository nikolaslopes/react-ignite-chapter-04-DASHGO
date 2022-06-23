import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-03-18T00:00:00.000Z',
      '2022-03-19T00:00:00.000Z',
      '2022-03-20T00:00:00.000Z',
      '2022-03-21T00:00:00.000Z',
      '2022-03-22T00:00:00.000Z',
      '2022-03-23T00:00:00.000Z',
      '2022-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 18, 109, 100] }]

const Dashboard: NextPage = () => {
  return (
    <Flex direction={'column'} height={'100vh'}>
      <Header />

      <Flex
        width={'100%'}
        maxWidth={'1480px'}
        marginY={'6'}
        marginX={'auto'}
        paddingX={'6'}
      >
        <Sidebar />

        <SimpleGrid flex={'1'} gap={'4'} minChildWidth={'320px'}>
          <Box
            padding={'8'}
            backgroundColor={'gray.800'}
            borderRadius={'8'}
            paddingBottom={'4'}
          >
            <Text fontSize={'lg'} marginBottom={'4'}>
              Subscribers of the week
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box padding={'8'} backgroundColor={'gray.800'} borderRadius={'8'}>
            <Text fontSize={'lg'} marginBottom={'4'}>
              Open rate
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
