<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  <span class="lg:pl-2">SN</span>
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  <span class="lg:pl-2">Name</span>
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Current Price
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Target Price
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody v-if="stocks.length > 0" class="bg-white divide-y divide-gray-200">
              <tr v-for="(stock, index) in stocks" :key="stock._id">
                <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                  {{ stock.name }}
                </td>
                <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                  {{ stock.description }}
                </td>
                <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                  {{ stock.currentPrice }}
                </td>
                <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                  {{ stock.targetPrice }}
                </td>
                <td
                  class="px-2 py-3 flex justify-center items-center text-sm leading-5 text-gray-500 font-medium"
                >
                  <router-link :to="{name: 'StockDetail', params: {id: stock._id}}" class="truncate mx-1 bg-indigo-800 px-4 py-2 rounded shadow-md text-white">
                    <span>View</span>
                  </router-link>
                  <router-link :to="{name: 'StockUpdate', params: {id: stock._id}}" class="truncate mx-1 bg-green-400 px-4 py-2 rounded shadow-md text-white">
                    <span>Update</span>
                  </router-link>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr class="bg-white">
                <td colspan="7">
                  <p class="m-3 text-center font-medium">
                    No stocks found
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockListComponent',
  props: {
    stocks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
