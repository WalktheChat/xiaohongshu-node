export = Xiaohongshu;

declare class Xiaohongshu {
    constructor(
      config: Xiaohongshu.IXiaohongshuConfig
    );
    spu: {
      create: (
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      update: (
        spuId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;   
      get: (
        spuId: number,
        query: any
      ) => Promise<Xiaohongshu.ISps>;
    };
    spl: {
      create: (
        spuId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      createItem: (
        splId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      update: (
        splId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      updateItem: (
        splId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;   
      summitItem: (splId: string) => Promise<Xiaohongshu.ISps>;
    };
    spv: {
      create: (
        splId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      update: (
        spvId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      updateCustoms: (
        spvId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;   
    };
    item: {
      create: (
        spvId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      update: (
        itemId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      updateLogistics: (
        itemId: string,
        body: any
      ) => Promise<any>;
      updateAvailability: (
        itemId: string,
        body: any
      ) => Promise<Xiaohongshu.ISps>;
      getListLite: (
        query: any
      ) => Promise<Xiaohongshu.IItems>;  
      getList: (
        query: any
      ) => Promise<Xiaohongshu.IItems>;
      get: (
        itemId: string,
      ) => Promise<Xiaohongshu.IItems>;
      getInventory: (
        itemId: string,
      ) => Promise<any>;
      updateInventory: (
        itemId: string,
        body: any
      ) => Promise<any>;
    };
    package: {
      getLastest: (
        query: any
      ) => Promise<Xiaohongshu.IPackages>;
      getStatus: (
        query: any
      ) => Promise<any>;
      getlist: (
        query: any
      ) => Promise<Xiaohongshu.IPackages>;
      get: (
        packageId: string,
      ) => Promise<Xiaohongshu.IPackage>;
      updateShipping: (
        packageId: string,
        body: any
      ) => Promise<any>;  
      createBatch: (
        body: any
      ) => Promise<any>;
      updateBatch: (
        batchNo: string,
        body: any
      ) => Promise<any>;
      updateCancelled: (
        body: any
      ) => Promise<any>;
      getlistCancelled: () => Promise<any>;
    };
}

declare namespace Xiaohongshu {
    export interface IXiaohongshuConfig {
      appKey: string;
      appSecret:  string;
      }

      interface ISps {
        spvs: ISpv[];
        items: IItem[];
        spls: ISpl[];
        spus: ISpu[];
        spl_items: IsplItems[];
      }

      interface ISp {
        spvs: ISpv;
        items: IItem;
        spls: ISpl;
        spus: ISpu;
        spl_items: IsplItems;
      }

      interface ISpu {
        id: string;
        pending_changes: string;
        ename: string;
        name: string;
        short_name: string;
        brand: any[];
        brand_id: string;
        category_id: string;
        categories: any[];
      }

      interface ISpv {
        spu_id: string;
        pending_changes: any;
        import_cost: number;
        net_weight: number;
        qty: number;
        spl_id: string;
        id: string;
        unit: string;
        barcode_type: string;
        non_desc_variants: any[];
        state: number;
        usage: string;
        shelf_life: number;
        ingredient: string;
        status: number;
        customs_photos_urls: string[];
        barcode: string;
        gross_weight: number;
        customs_photos: any[];
        manufacturer: string;
        customs_specification: string;
        country: string;
      }

      interface IItem {
        spu_id: string;
        update_time: number;
        ename: string;
        name: string;
        skucode: string;
        original_price: number;
        tax: number;   
        pre_tax_price: number;   
        price: number;   
        tax_rate: number;
        barcode: string;
        pending_changes: any;
        available: boolean;
        buyable: boolean;
        spv_id: string;
        state: number;
        create_time: number;
        status: number;
        spl_id: string;
        top_image: string;
        id: string;
        barcode_type: string;
        logistics: string;
      }

      interface ISpl {
        spu_id: string;
        status: number;
        id: string;
        state: number;
        variants: any[];
        pending_change: any;
      }

      interface IsplItems {
        spu_id: string;
        status: number;
        videos: null;
        spl_id: string;
        feature: string;
        image_urls: string[];
        faqs: any[];
        state: number;
        pending_changes: any;
        user_guide: any;
        image_desc: any;
        images: any;
        attributes: any[];
        id: string;
        desc: string
      }

      interface IItems {
        current_page?: number,
        page_size?: number,
        total: number,
        hits: Isp[]
      }

      interface IPackage {
        package_id: string;
        logistics: string;
        time: number;
        pay_time: number;
        confirm_time: number;
        express_company_code: string;
        express_company_name: string;
        express_no: number;
        status: string;
        receiver_name: string;
        receiver_phone: number;
        receiver_address: string;
        province: string;
        city: string;
        district: string;
        total_net_weight: number;
        pay_amount: number;
        id_number: number;
        international_express_no: string;
        delivery_time_preference: string;
        order_declared_amount: number;
        paint_marker: string;
        express_extend_1: string;
        express_extend_2: string;
        shipping_fee: number;
        item_list: any[]
      }

      interface IPackages {
        current_page?: number,
        total_page?: number,
        page_size?: number,
        total_num?: number,
        total_number?: number,
        packages?: IPackage[]
        package_list?: IPackage[]
      }
}