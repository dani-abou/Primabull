import { useEffect } from "react"
import { urls } from "../../common"
import { BulkiContextConsumer } from "../../common/context"
import { BulkiH4 } from "../../common/styles"
import { AccountListings, AccountOrders, AccountPaymentInfo, AccountProfile } from "./accountPages"
import { StyledFlex, StyledLeft, StyledRight, StyledSurface, StyledTab, StyledTabs, StyledTitle, StyledTitleBox } from "./style"

const TABS = {
  [urls.account.tabs.profile]: {
    tabLabel: 'Profile',
    page: () => <AccountProfile />
  },
  [urls.account.tabs.orders]: {
    tabLabel: 'Orders',
    page: () => <AccountOrders />
  },
  [urls.account.tabs.paymentInfo]: {
    tabLabel: 'Payment Info',
    page: () => <AccountPaymentInfo />
  },
  [urls.account.tabs.listings]: {
    tabLabel: 'Listings',
    page: props => <AccountListings {...props} />
  }
}



const Account = ({ currentTab, setSelectedTab, userData }) => {
  const test = (e, newValue) => {
    setSelectedTab(newValue)
  }

  return <StyledSurface>
    <StyledFlex>
      <StyledLeft>
        <StyledTitleBox>
          <StyledTitle>
            <BulkiH4>
              Account
            </BulkiH4>
          </StyledTitle>
        </StyledTitleBox>
        <StyledTabs value={currentTab} onChange={test} orientation="vertical">
          {Object.keys(TABS).map(tabKey => {
            const tab = TABS[tabKey]
            return <StyledTab key={tabKey} label={tab.tabLabel} value={tabKey} userData={userData} />
          })}
        </StyledTabs>
      </StyledLeft>
      <StyledRight>{TABS[currentTab]?.page({ userData })}</StyledRight>
    </StyledFlex>
  </StyledSurface>
}

export default function AccountWithContext(props) {
  return <BulkiContextConsumer>

    {context => <Account {...props} userData={context.userData} />}
  </BulkiContextConsumer >
}