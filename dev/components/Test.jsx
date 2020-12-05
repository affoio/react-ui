import React from 'react';
import { Link as _Link } from 'react-router-dom';
import {
  Box,
  Link,
  Row,
  Col,
  Container,
  Text,
  Checkbox,
  Input,
  Select,
  Dropdown,
  SearchIcon,
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarItemList,
  InputPhone,
  SelectItem,
} from '../../src';
import Filler, { FillerCerise } from './Filler';
import Title from '../../src/components/Typography/Title';
import TextWithButton from './TextWithButton';
import CloseEyeIcon from '../../src/components/Icon/CloseEyeIcon';
import SuccessIcon from '../../src/components/Icon/SuccessIcon';
import FailureIcon from '../../src/components/Icon/FailureIcon';
import WaitIcon from '../../src/components/Icon/WaitIcon';
import WarningIcon from '../../src/components/Icon/WarningIcon';
import Tabs from '../../src/components/Tabs/Tabs';
import TabsContent from '../../src/components/Tabs/TabsContent';
import Flex from '../../src/components/Grid/Flex';
import Notification from '../../src/components/Notification/Notification';
import Toast from '../../src/components/Toast/Toast';
import Control from '../../src/components/Control/Control';

const CustomOption = ({ option, ...otherProps }) => (
  <SelectItem {...otherProps}>
    <Flex between width="100%">
      <Text size="300">{option.value}</Text>
      <Text size="300" fontWeight="bold">
        {option.balance}
      </Text>
    </Flex>
  </SelectItem>
);

const ToggleComponent = ({ selectedOption, arrow, ...other }) => (
  <Control after={arrow} {...other} tabIndex={0}>
    <Flex between width="100%">
      <Text size="300">{selectedOption.value}</Text>
      <Text size="300" fontWeight="bold">
        {selectedOption.balance}
      </Text>
    </Flex>
  </Control>
);
const WithdrawalSelect = props => (
  <Select {...props} option={CustomOption} label="123" placeholder="123" toggle={ToggleComponent} />
);

const Test = () => {
  const testRef = React.useRef();
  const [modal, openModal] = React.useState(false);
  const [asdasdasd, openModalasdasd] = React.useState(false);
  const [tab, changeTab] = React.useState(222);
  const [country, onCountryChangeHandler] = React.useState('ru');

  return (
    <Container fullWidth>
      <Box mb={4}>
        <Row top="xs" between={['xs', 'lg']} around="sm">
          <Col xs={12} sm={6} lg={6}>
            <Row>
              <Col xs={12} sm={6} lg={6}>
                <Row>
                  <Col xs={6} sm={4} lg={6}>
                    <FillerCerise
                      onClick={() => {
                        openModal(true);
                        openModalasdasd(true);
                      }}
                    />
                  </Col>
                  <Col xs={6} sm={8} lg={6}>
                    <Filler
                      onClick={() => {
                        openModal(true);
                      }}
                    />

                    <Box ref={testRef}>[[</Box>
                    {modal && (
                      <Toast
                        top="116x"
                        right="20px"
                        title="asdasd"
                        text="asdasd kn asl da skdal skd  asdlk 1oi2jo"
                        type="success"
                        onClose={() => openModal(false)}
                        container={document.getElementById('portal-root')}
                      />
                    )}
                    {asdasdasd && (
                      <Toast
                        top="90px"
                        right="20px"
                        title="asdasd"
                        text="asdasd kn asl da skdal skd  asdlk 1oi2jo"
                        type="error"
                        onClose={() => openModalasdasd(false)}
                        container={document.getElementById('portal-root')}
                      />
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6} lg={6}>
                <FillerCerise />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <Filler />
          </Col>
        </Row>
      </Box>
      <Row middle>
        <Col grow>
          <Title level="1">
            First{' '}
            <Link to="/level" component={_Link}>
              level
            </Link>{' '}
            title
          </Title>
        </Col>
      </Row>
      <Row top>
        <Col grow lg={5} sm={8}>
          <Flex between={['sm']} py={5}>
            <Checkbox label="Retired" disabled />
            <Checkbox label="Retired" disabled defaultChecked />
            <Checkbox label="Retired" defaultChecked />
          </Flex>
          <Box mb={4}>
            <Input
              before={<SearchIcon color="red" />}
              label="label"
              error="Oh no error"
              after={<CloseEyeIcon color="red" />}
            />
            <Dropdown toggle="123" hoverable inline>
              hidden content
            </Dropdown>
            <SuccessIcon />
            <FailureIcon />
            <WaitIcon />
            <WarningIcon />
          </Box>
        </Col>
        <Col sm={6}>
          {tab && (
            <Notification
              title="Informational notification"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem"
              type="warning"
              closable
              onClose={() => changeTab(false)}
            />
          )}
        </Col>
        <Col sm={6}>
          <Select
            onChange={value => console.log(value)}
            options={[{ value: 2, label: 'afgan' }, { value: 3, label: 'russ' }, { value: 4, label: 'Russ' }]}
            label="Country"
            placeholder="Country"
          />
        </Col>
        <Col sm={6}>
          <Tabs defaultTab={123}>
            {({ onTabClick, activeTab }) => (
              <>
                <div
                  onClick={() => {
                    changeTab(123);
                    onTabClick(123);
                  }}
                >
                  {activeTab === 123 && 'active'}1
                </div>
                <div
                  onClick={() => {
                    changeTab(222);
                    onTabClick(222);
                  }}
                >
                  {activeTab === 222 && 'active'}2
                </div>
              </>
            )}
          </Tabs>
          <TabsContent activeTab={tab}>
            {({ TabItem }) => (
              <div>
                <TabItem value={123}> adasdsda s</TabItem>
                <TabItem value={222}> 2</TabItem>
              </div>
            )}
          </TabsContent>
        </Col>
        <Col sm={6}>
          <Select
            onChange={value => console.log(value)}
            options={[{ value: 2, label: 'afgan' }, { value: 3, label: 'russ' }, { value: 4, label: 'Russ' }]}
            label="Country"
            placeholder="Country"
          />
        </Col>
        <Col grow xs={12}>
          <Box mb={4}>
            <FillerCerise>
              <Text size="400" fontWeight="bold" inverse>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam perspiciatis iusto temporibus quia
                quam voluptate quas totam porro repellendus animi nisi necessitatibus minus dignissimos sequi, illo est
                aliquam excepturi.
              </Text>
            </FillerCerise>
          </Box>
        </Col>
      </Row>
      <Row fluid={['sm', 'lg']}>
        <Col>
          <Box width="256px">
            <FillerCerise>
              <Text size="400" fontWeight="bold" inverse>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam perspiciatis iusto temporibus quia
                quam voluptate quas totam porro repellendus animi nisi necessitatibus minus dignissimos sequi, illo est
                aliquam excepturi.
              </Text>
            </FillerCerise>
          </Box>
        </Col>
        <Col grow>
          <TextWithButton />
        </Col>

        <Col sm={2} lg={2}>
          <InputPhone country={country} onChangeCountry={onCountryChangeHandler} />
        </Col>
        <Col sm={12} lg={12} grow>
          <Box width="300px">
            <Navbar>
              <NavbarSection>
                <NavbarItemList
                  withoutLinks
                  onClick={() => openModal(false)}
                  header="Dashboard"
                  paths={[
                    { path: '/login', name: 'login', onClick: () => openModal(true) },
                    { path: '/forgot', name: 'forgot', active: true },
                  ]}
                />
              </NavbarSection>
              <NavbarItem active onClick={() => openModal(false)} to="/singup">
                signup
              </NavbarItem>
            </Navbar>
          </Box>
        </Col>
        <NavbarItemList
          header="Dashboard"
          paths={[{ path: '/login', external: true, name: 'login' }, { path: '/forgot', name: 'forgot' }]}
        />
      </Row>
      <Col sm={2} lg={2}>
        <InputPhone country={country} onChangeCountry={onCountryChangeHandler} />
      </Col>
      <Col sm={2} lg={2}>
        <InputPhone country={country} onChangeCountry={onCountryChangeHandler} />
      </Col>
      <WithdrawalSelect
        defaultValue={{
          balance: '90.38',
          balance_currency: 'USD',
          created_at: '2019-07-02T10:15:01.725008',
          id: 723,
          mt_account: 10634,
          payment_account_id: 'a0ef073c-517f-b7dc-e509-0fdf1c002154',
          payment_account_masked: '400000...0002',
          payment_method: 'visa',
          ratio: 0.0638727915194346,
          type: 'change',
          updated_at: '2019-07-02T10:15:01.724979',
          value: '400000...0002',
        }}
        options={[
          {
            balance: '90.38',
            balance_currency: 'USD',
            created_at: '2019-07-02T10:15:01.725008',
            id: 723,
            mt_account: 10634,
            payment_account_id: 'a0ef073c-517f-b7dc-e509-0fdf1c002154',
            payment_account_masked: '400000...0000',
            payment_method: 'visa',
            ratio: 0.0638727915194346,
            type: 'change',
            updated_at: '2019-07-02T10:15:01.724979',
            value: '400000...0000',
          },
          {
            balance: '90.38',
            balance_currency: 'USD',
            created_at: '2019-07-02T10:15:01.725008',
            id: 723,
            mt_account: 10634,
            payment_account_id: 'a0ef073c-517f-b7dc-e509-0fdf1c002154',
            payment_account_masked: '400000...0002',
            payment_method: 'visa',
            ratio: 0.0638727915194346,
            type: 'change',
            updated_at: '2019-07-02T10:15:01.724979',
            value: '400000...0002',
          },
        ]}
      />
      <Input
        before={<SearchIcon color="red" />}
        label="label"
        error="Oh no error"
        after={<CloseEyeIcon color="red" />}
      />
    </Container>
  );
};

export default Test;
