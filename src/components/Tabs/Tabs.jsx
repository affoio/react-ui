import { useState } from 'react';
import { withTabPanel } from './TabPanel';

const Tabs = ({ children, defaultTab, onChange, active }) => {
  const [activeTab, changeActiveTab] = useState(defaultTab || active);
  const onChangeHandler = value => {
    changeActiveTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  return children({
    TabPanel: withTabPanel(active || activeTab, onChangeHandler),
    activeTab,
    onTabClick: onChangeHandler,
  });
};

export default Tabs;
