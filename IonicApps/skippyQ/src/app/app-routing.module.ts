import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
//
  {
    path: 'my-advice',
    loadChildren: () => import('./my-advice/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'investment-ideas',
    loadChildren: () => import('./investment-ideas/investment-ideas.module').then(m => m.InvestmentIdeasPageModule)
  },
  {
      path: 'investment-details-oil/:id',
      loadChildren: () => import('./investment-details-oil/investment-details-oil.module').then(m => m.InvestmentDetailsOilPageModule)
  },
  {
      path: 'investment-trading-idea',
      loadChildren: () => import('./investment-trading-idea/investment-trading-idea.module').then(m => m.InvestmentTradingIdeaPageModule)
  },
  {
    path: 'finance-news',
    loadChildren: () => import('./finance-news/finance-news.module').then(m => m.FinanceNewsPageModule)
  },
  {
    path: 'trading-eg',
    loadChildren: () => import('./trading-eg/trading-eg.module').then( m => m.TradingEgPageModule)
  },
  // {
  //   path: 'sign-up',
  //   loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  // },
  // {
  //   path: 'login-charity',
  //   loadChildren: () => import('./login-charity/login-charity.module').then( m => m.LoginCharityPageModule)
  // },
  // {
  //   path: 'sign-up-charity',
  //   loadChildren: () => import('./sign-up-charity/sign-up-charity.module').then( m => m.SignUpCharityPageModule)
  // },
//   {
//     path: 'admin',
//     loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
//   },
  // {
  //   path: 'charity-dashboard',
  //   loadChildren: () => import('./charity-dashboard/charity-dashboard.module').then( m => m.CharityDashboardPageModule)
  // },
  // {
  //   path: 'donor-profile',
  //   loadChildren: () => import('./donor-profile/donor-profile.module').then( m => m.DonorProfilePageModule)
  // },
  // {
  //   path: 'edit-donor-profile',
  //   loadChildren: () => import('./edit-donor-profile/edit-donor-profile.module').then( m => m.EditDonorProfilePageModule)
  // },
  // {
  //   path: 'admin-edit/:email',
  //   loadChildren: () => import('./admin-edit/admin-edit.module').then( m => m.AdminEditPageModule)
  // },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'assets',
    loadChildren: () => import('./assets/campaign-donors.module').then( m => m.CampaignDonorsPageModule)
  },
    {
      path: 'ubs-manage',
      loadChildren: () => import('./ubs-manage/ubs-manage.module').then( m => m.UbsManagePageModule)
    },
        {
          path: 'buy-trade',
          loadChildren: () => import('./buy-trade/buy-trade.module').then( m => m.BuyTradePageModule)
        },
         {
                  path: 'buy-trade-stock',
                  loadChildren: () => import('./buy-trade-stock/buy-trade-stock.module').then( m => m.BuyTradeStockPageModule)
          },

        {
                   path: 'buy-trade-stock-success',
                   loadChildren: () => import('./buy-trade-stock-success/buy-trade-stock-success.module').then( m => m.BuyTradeStockSuccessPageModule)
         },
          {
                            path: 'buy-trade-stock-review',
                            loadChildren: () => import('./buy-trade-stock-review/buy-trade-stock-review.module').then( m => m.BuyTradeStockReviewPageModule)
           },
          {
                                       path: 'buy-trade-stock-completed',
                                       loadChildren: () => import('./buy-trade-stock-completed/buy-trade-stock-completed.module').then( m => m.BuyTradeStockCompletedPageModule)
          },
          {
                                                 path: 'sell-trade-stock',
                                                 loadChildren: () => import('./sell-trade-stock/sell-trade-stock.module').then( m => m.SellTradeStockPageModule)
           },
           {
                                                            path: 'sell-trade',
                                                            loadChildren: () => import('./sell-trade/sell-trade.module').then( m => m.SellTradePageModule)
            },
            {
                                                                        path: 'sell-trade-stock-success',
                                                                        loadChildren: () => import('./sell-trade-stock-success/sell-trade-stock-success.module').then( m => m.SellTradeStockSuccessPageModule)
            },
            {
                                                                                    path: 'sell-trade-stock-review',
                                                                                    loadChildren: () => import('./sell-trade-stock-review/sell-trade-stock-review.module').then( m => m.SellTradeStockReviewPageModule)
            },
                        {
                                                                                                path: 'sell-trade-stock-completed',
                                                                                                loadChildren: () => import('./sell-trade-stock-completed/sell-trade-stock-completed.module').then( m => m.SellTradeStockCompletedPageModule)
                        },
                        {
                                                                                                                        path: 'trading-home',
                                                                                                                        loadChildren: () => import('./trading-home/trading-home.module').then( m => m.TradingHomePageModule)
                        },
                        {
                                                                                                                                                path: 'trade-details',
                                                                                                                                                loadChildren: () => import('./trade-details/trade-details.module').then( m => m.TradeDetailsPageModule)
                        },
                               {
                                                                                                                                                                        path: 'request-cancel-order',
                                                                                                                                                                        loadChildren: () => import('./request-cancel-order/request-cancel-order.module').then( m => m.RequestCancelOrderPageModule)
                                                },
                                                                        {
                                                                                                                                                                                                                        path: 'cancel-order-successful',
                                                                                                                                                                                                                        loadChildren: () => import('./cancel-order-successful/cancel-order-successful.module').then( m => m.CancelOrderSuccessfulPageModule)
                                                                                                },
  {
    path: 'hc-details',
    loadChildren: () => import('./hc-details/hc-details.module').then( m => m.HcDetailsPageModule)
  },
  {
    path: 'hc-fulfilled',
    loadChildren: () => import('./hc-fulfilled/hc-fulfilled.module').then( m => m.HcFulfilledPageModule)
  },
  {
    path: 'health-check',
    loadChildren: () => import('./health-check/health-check.module').then( m => m.HealthCheckPageModule)
  },
  {
    path: 'in-progress-msg',
    loadChildren: () => import('./in-progress-msg/in-progress-msg.module').then( m => m.InProgressMsgPageModule)
  },
  {
    path: 'no-issue',
    loadChildren: () => import('./no-issue/no-issue.module').then( m => m.NoIssuePageModule)
  },
  {
    path: 'selected-issue',
    loadChildren: () => import('./selected-issue/selected-issue.module').then( m => m.SelectedIssuePageModule)
  },
  {
    path: 'star',
    loadChildren: () => import('./star/star.module').then( m => m.StarPageModule)
  },
  {
    path: 'request-proposal',
    loadChildren: () => import('./request-proposal/request-proposal.module').then( m => m.RequestProposalPageModule)
  },
  {
    path: 'confirmation-modal',
    loadChildren: () => import('./confirmation-modal/confirmation-modal.module').then( m => m.ConfirmationModalPageModule)
  }




  // {
  //   path: 'campaign-search/:org',
  //   loadChildren: () => import('./campaign-search/campaign-search.module').then( m => m.CampaignSearchPageModule)
  // },
  // {
  //   path: 'donate/:campaign/:organization/:img',
  //   loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  // },
  // {
  //   path: 'my-donation',
  //   loadChildren: () => import('./my-donation/my-donation.module').then( m => m.MyDonationPageModule)
  // },
  // {
  //   path: 'successful',
  //   loadChildren: () => import('./successful/successful.module').then( m => m.SuccessfulPageModule)
  // },
//   {
//     path: 'view-details/:id/:fav',
//     loadChildren: () => import('./view-details/view-details.module').then( m => m.ViewDetailsPageModule)
//   },
  // {
  //   path: 'charity-page',
  //   loadChildren: () => import('./charity-page/charity-page.module').then( m => m.CharityPagePageModule)
  // },
  // {
  //   path: 'create/:id',
  //   loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  // },
  // {
  //   path: 'edit/:email',
  //   loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  // },
  // {
  //   path: 'edit-campaign/:id',
  //   loadChildren: () => import('./edit-campaign/edit-campaign.module').then( m => m.EditCampaignPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: 'starred',
  //   loadChildren: () => import('./starred/starred.module').then( m => m.StarredPageModule)
  // },
//   {
//     path: '',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
