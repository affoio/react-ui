import React from 'react';

const withTabItem = activeTab => props => activeTab === props.value && <div {...props} />;

const TabsContent = ({ children, activeTab }) => {
  return children({
    TabItem: withTabItem(activeTab),
  });
};

export default TabsContent;
