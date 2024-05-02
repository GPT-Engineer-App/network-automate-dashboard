import { Box, Flex, Grid, GridItem, Text, VStack, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import { FaExclamationTriangle, FaNetworkWired, FaChartLine, FaTools, FaBell } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Network Automation Dashboard</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <FaNetworkWired />
            <Text>Bandwidth Usage</Text>
          </GridItem>
          <GridItem w="100%" bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <FaExclamationTriangle />
            <Text>Device Status</Text>
          </GridItem>
          <GridItem w="100%" bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <FaChartLine />
            <Text>Performance Metrics</Text>
          </GridItem>
        </Grid>
        <Flex align="center" justify="space-between" w="100%" p={4}>
          <Button leftIcon={<FaTools />} colorScheme="teal">Manage APIs</Button>
          <Button leftIcon={<FaBell />} colorScheme="red">Alerts</Button>
        </Flex>
        <Text fontSize="sm">© 2023 Network Solutions. All rights reserved.</Text>
      </VStack>
    </Box>
  );
};

export default Index;