<template>
  <span>
    <bread-crumb-component :links="breadcrumbs" />
    <p class="text-center my-2 text-3xl font-semibold text-blue-700">
      UPDATE STOCK
    </p>
    <div class="mx-auto my-3 md:w-1/2">
      <update-stock-form v-if="singleStock && allPortfolio" action="update" :stock-obj="singleStock" :portfolios="allPortfolio" @updateStock="updateStock" />
    </div>
  </span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BreadCrumbComponent from '../../components/common/breadcrumbs.vue';
import * as stockTypes from '../../store/modules/stock/stock-types';
import * as portfolioTypes from '../../store/modules/portfolio/portfolio-types';
import UpdateStockForm from '../../components/stock/stock-form.vue';

export default {
  name: 'CreatePortfolioPage',
  components: {
    UpdateStockForm,
    BreadCrumbComponent,
  },
  data() {
    return {
      breadcrumbs: [],
    };
  },
  computed: {
    ...mapGetters({
      allPortfolio: portfolioTypes.GET_ALL_PORTFOLIOS,
      singleStock: stockTypes.GET_SINGLE_STOCK,
    }),
  },
  mounted() {
    this.getSingleStockAction(this.$route.params.id);
    this.getAllPortfolio();
  },
  beforeUpdate() {
    if (this.singleStock) {
      this.breadcrumbs = [];
      this.breadcrumbs.push(
        {
          title: 'Stocks',
          to: { name: 'StockList' },
        },
        {
          title: 'Update',
        },
        {
          title: this.singleStock.name,
          to: {
            name: 'StockUpdate',
            // eslint-disable-next-line no-underscore-dangle
            params: { id: this.singleStock._id },
          },
        },
      );
    }
  },
  methods: {
    ...mapActions({
      updateStock: stockTypes.UPDATE_STOCK_ACTION,
      getAllPortfolio: portfolioTypes.GET_ALL_PORTFOLIOS_ACTION,
      getSingleStockAction: stockTypes.GET_SINGLE_STOCK_ACTION,
    }),
  },
};
</script>
