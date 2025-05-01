// Get tracking number from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const trackingNumber = urlParams.get('trackingid');

if (!trackingNumber) {
    document.getElementById('timeline').innerHTML = '<p style="color: red;">No tracking number provided. Please add ?trackingid=xxx to the URL.</p>';
    throw new Error('No tracking number provided');
}

// Mock data for local development
// const mockData = {"entity":{"uuid":"eg1_088eec1b-4991-4552-9625-d8555585c16f","id":"sfex-SF3148685401369","type":"waybill","creationTime":"2025-04-04T05:59:37+08:00"},"events":[{"status":3100,"what":"Received by Carrier","when":"2025-04-04T05:59:37+08:00","where":"三藩市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"顺丰速运 已收取快件，您的期待，我们定竭诚守护，不负所托。","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-04T06:40:30+08:00","where":"三藩市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【美国三藩市营运中心】完成分拣，准备发往下一站","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3250,"what":"In-Transit","when":"2025-04-06T17:03:00+08:00","where":"三藩市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【三藩市】起飞，准备发往【广州】，正穿越云端，向目的地飞奔而来","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3350,"what":"Customs Clearance: Import In-Progress","when":"2025-04-07T10:28:54+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"清关进行中,请耐心等候","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-07T15:25:37+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件到达 【广州机场关务组】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-07T15:25:38+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【广州机场关务组】完成分拣，准备发往 【广州转运枢纽】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-07T16:18:31+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件离开 【广州机场关务组】，已在发往  【广州转运枢纽】 的路上","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-07T16:50:56+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件到达 【广州转运枢纽】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-07T17:01:27+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【广州转运枢纽】完成分拣，准备发往 【广州穗北转运中心】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-07T17:18:20+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件离开 【广州转运枢纽】，已在发往  【广州穗北转运中心】 的路上","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-07T18:33:23+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件到达 【广州穗北转运中心】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-08T03:18:44+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【广州穗北转运中心】完成分拣，准备发往 【上海浦江转运中心】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-08T06:14:10+08:00","where":"广州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件离开 【广州穗北转运中心】，已在发往  【上海浦江转运中心】 的路上","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-08T08:17:10+08:00","where":"河源市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件途经河源市","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-08T14:17:11+08:00","where":"抚州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件途经抚州市","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.852Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-08T20:17:12+08:00","where":"杭州市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件途经杭州市","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-09T02:09:14+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件到达 【上海浦江转运中心】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-09T03:23:48+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【上海浦江转运中心】完成分拣，准备发往 【上海西大件转运中心】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-09T05:10:11+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件离开 【上海浦江转运中心】，已在发往  【上海西大件转运中心】 的路上","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-09T07:11:38+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件到达 【上海西大件转运中心】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-09T08:58:23+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件在【上海西大件转运中心】完成分拣，准备发往 【上海松江涞坊路大件店】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-09T11:43:05+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件离开 【上海西大件转运中心】，已在发往  【上海松江涞坊路大件店】 的路上","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-09T12:45:51+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件到达 【上海松江涞坊路大件店，地址：松江区上海市上海市松江区九亭镇松江区涞坊路2000号3号楼】","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-09T13:24:36+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"我们正在为您的快件分配最合适的快递员，请您稍等。","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3450,"what":"Final Delivery In-Progress","when":"2025-04-09T14:19:18+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"快件交给【卜令彬，联系电话：15800973696】，正在派送途中（如有任何问题可先联系我，我将尽全力为您解决。您的认可，是我最大的动力！）","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}},{"status":3500,"what":"Delivered","when":"2025-04-09T15:00:54+08:00","where":"上海市","whom":"SF Express","additional":{"operatorCode":"sfex","trackingNum":"SF3148685401369","notes":"经客户同意，快件已放在（A802），如有疑问请电联快递员【卜令彬，电话：15800973696】。您的体验对于我们至关重要，如果您对我们的服务有任何的想法和建议，请随时联系我们，我们一定用心倾听，全力改进，不辜负您的信任与支持。","dataProvider":"SF Express","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T00:57:02.853Z"}}]}
// const mockData = {"entity":{"uuid":"eg1_7b7854a6-6422-49cf-9cbc-a3f7e003b2d1","id":"fdx-880323287624","type":"waybill","creationTime":"2025-04-04T16:59:51-05:00","additional":{"origin":"AMERICAN CANYON CA United States","destination":"MADETSWIL ZH Switzerland"}},"events":[{"status":3000,"what":"Transport Bill Created","when":"2025-04-04T16:59:51-05:00","where":"Customer location","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Shipment information sent to FedEx","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3050,"what":"Picked Up","when":"2025-04-07T15:01:00-07:00","where":"PACHECO CA United States","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Picked up","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-08T03:44:00-07:00","where":"OAKLAND CA United States","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Arrived at FedEx hub","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-08T15:26:00-07:00","where":"OAKLAND CA United States","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Departed FedEx hub","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-08T15:27:00-07:00","where":"OAKLAND CA United States","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"On the way","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-09T11:03:00+02:00","where":"GRACE-HOLLOGNE  Belgium","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Arrived at FedEx hub","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-09T17:23:00+02:00","where":"GRACE-HOLLOGNE  Belgium","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"On the way","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3400,"what":"Customs Clearance: Import Released","when":"2025-04-10T02:39:00+02:00","where":"BASEL BS Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"International shipment release - Import","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-10T05:19:00+02:00","where":"GRACE-HOLLOGNE  Belgium","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"On the way","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3004,"what":"Departed, In-Transit","when":"2025-04-10T05:23:00+02:00","where":"GRACE-HOLLOGNE  Belgium","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Departed FedEx hub","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-10T14:30:00+02:00","where":"BASEL BS Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"At destination sort facility","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-10T14:45:00+02:00","where":"BASEL BS Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"At local FedEx facility","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-11T02:26:00+02:00","where":"BASEL BS Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"On the way: Package available for clearance","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.532Z","exceptionCode":-1,"exceptionDesc":"Unknown Exception"}},{"status":3001,"what":"Logistics In-Progress","when":"2025-04-11T02:30:00+02:00","where":"BASEL BS Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"On the way","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-11T08:26:00+02:00","where":"DAELLIKON ZH Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"At local FedEx facility","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-11T11:01:00+02:00","where":"DAELLIKON ZH Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"At local FedEx facility: Your package is expected to arrive on the scheduled delivery date","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z","exceptionCode":-1,"exceptionDesc":"Unknown Exception"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-11T11:07:00+02:00","where":"DAELLIKON ZH Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"At local FedEx facility","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z"}},{"status":3002,"what":"Arrived, In-Transit","when":"2025-04-14T08:13:00+02:00","where":"DAELLIKON ZH Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"At local FedEx facility","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z"}},{"status":3450,"what":"Final Delivery In-Progress","when":"2025-04-14T09:58:00+02:00","where":"DAELLIKON ZH Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"On FedEx vehicle for delivery","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z"}},{"status":3500,"what":"Delivered","when":"2025-04-14T15:44:00+02:00","where":"MADETSWIL ZH Switzerland","whom":"FedEx","additional":{"operatorCode":"fdx","trackingNum":"880323287624","notes":"Delivered","dataProvider":"FedEx","lastUpdateMethod":"manual-pull","lastUpdateTime":"2025-04-15T21:18:58.533Z"}}]};

const mockData = `{
    "entity": {
        "id": "fdx-880121646970",
        "type": "waybill",
        "uuid": "eg1_698c35e2-14c4-4318-abe2-0e1677904596",
        "createdAt": "2025-03-27T13:20:56-05:00",
        "additional": {
            "origin": "AMERICAN CANYON CA United States",
            "destination": "SUGINAMI-KU, TOKYO  Japan"
        }
    },
    "events": [
        {
            "status": 3000,
            "what": "Transport Bill Created",
            "whom": "FedEx",
            "when": "2025-03-27T13:20:56-05:00",
            "where": "Customer location",
            "notes": "Shipment information sent to FedEx",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3050,
            "what": "Picked Up",
            "whom": "FedEx",
            "when": "2025-03-27T14:47:00-07:00",
            "where": "PACHECO CA United States",
            "notes": "Picked up",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3100,
            "what": "Received by Carrier",
            "whom": "FedEx",
            "when": "2025-03-27T17:15:00-07:00",
            "where": "PACHECO CA United States",
            "notes": "Left FedEx origin facility",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3002,
            "what": "Arrived, In-Transit",
            "whom": "FedEx",
            "when": "2025-03-27T18:13:00-07:00",
            "where": "OAKLAND CA United States",
            "notes": "Arrived at FedEx hub",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3001,
            "what": "Logistics In-Progress",
            "whom": "FedEx",
            "when": "2025-03-28T03:15:00-07:00",
            "where": "OAKLAND CA United States",
            "notes": "On the way",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3250,
            "what": "In-Transit",
            "whom": "FedEx",
            "when": "2025-03-28T05:16:00-07:00",
            "where": "OAKLAND CA United States",
            "notes": "Departed FedEx hub",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3300,
            "what": "Arrived At Destination",
            "whom": "FedEx",
            "when": "2025-03-29T08:07:00+09:00",
            "where": "NARITA-SHI  Japan",
            "notes": "At destination sort facility",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3001,
            "what": "Logistics In-Progress",
            "whom": "FedEx",
            "when": "2025-03-30T09:11:00+09:00",
            "where": "TOKYO-KOTO-KU  Japan",
            "notes": "On the way",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3400,
            "what": "Customs Clearance: Import Released",
            "whom": "FedEx",
            "when": "2025-03-30T13:28:00+09:00",
            "where": "TOKYO-KOTO-KU  Japan",
            "notes": "International shipment release - Import",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3400,
            "what": "Customs Clearance: Import Released",
            "whom": "FedEx",
            "when": "2025-03-30T16:58:00+09:00",
            "where": "TOKYO-KOTO-KU  Japan",
            "notes": "International shipment release - Import",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-03-30T18:42:00+09:00",
            "where": "TOKYO-KOTO-KU  Japan",
            "notes": "On the way: A trusted third-party vendor is on the way with your package.",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z",
                "exceptionCode": 900,
                "exceptionDesc": "Exception Occurred"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-03-31T13:37:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: Customer not available or business closed",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.283Z",
                "exceptionCode": 907,
                "exceptionDesc": "Recipient Not Available"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-01T15:11:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: Customer not available or business closed",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 907,
                "exceptionDesc": "Recipient Not Available"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-01T16:18:00+09:00",
            "where": "  Japan",
            "notes": "Delivery option requested: Hold at FedEx Facility request received - Check back later for shipment status",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 900,
                "exceptionDesc": "Exception Occurred"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-02T10:21:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: Customer not available or business closed",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 907,
                "exceptionDesc": "Recipient Not Available"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-03T18:31:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: Customer not available or business closed",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 907,
                "exceptionDesc": "Recipient Not Available"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-04T19:22:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: Customer not available or business closed",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 907,
                "exceptionDesc": "Recipient Not Available"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-06T16:40:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: A request was made to change this delivery date.",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 900,
                "exceptionDesc": "Exception Occurred"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-06T17:17:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: A request was made to change this delivery date.",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 900,
                "exceptionDesc": "Exception Occurred"
            }
        },
        {
            "status": 3450,
            "what": "Final Delivery In-Progress",
            "whom": "FedEx",
            "when": "2025-04-08T15:20:00+09:00",
            "where": "CHIBA-SHI HANAMIGAWA-KU  Japan",
            "notes": "Delivery exception: A request was made to change this delivery date.",
            "additional": {
                "trackingNum": "880121646970",
                "operatorCode": "fdx",
                "dataProvider": "FedEx",
                "updateMethod": "manual-pull",
                "updatedAt": "2025-04-29T10:55:18.284Z",
                "exceptionCode": 900,
                "exceptionDesc": "Exception Occurred"
            }
        }
    ]
}`;

// Toggle this for development/production

const isDevelopment = false; // Toggle this for development/production

if (isDevelopment) {
    // Use mockData directly
    const data = JSON.parse(mockData);
    // const data = mockData;
    renderTrackingData(data);
} else {
    fetch(`https://api.eg1.io/v0/whereis/${trackingNumber}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eagle1'
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        renderTrackingData(data);
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
        const errorMessage = 'Error loading tracking data.';
        
        document.getElementById('timeline').innerHTML = `<p style="color: red;">${errorMessage}</p>`;
    });
}

// Function to render tracking data
function renderTrackingData(data) {
    // Get the latest event and status
    const latestEvent = data.events[data.events.length - 1];
    const latestStatus = latestEvent.what;
    document.getElementById('status').textContent = latestStatus;

    // Display header info
    document.getElementById('tracking-num').textContent = data.entity.id;
    
    // Only show origin if it exists
    const originElement = document.getElementById('origin-container');
    if (data.entity.additional?.origin) {
        originElement.style.display = 'block';
        document.getElementById('origin').textContent = data.entity.additional.origin;
    } else {
        originElement.style.display = 'none';
    }

    // Only show destination if it exists
    const destinationElement = document.getElementById('destination-container');
    if (data.entity.additional?.destination) {
        destinationElement.style.display = 'block';
        document.getElementById('destination').textContent = data.entity.additional.destination;
    } else {
        destinationElement.style.display = 'none';
    }

    // Check if last event has an exception
    if (latestEvent.additional?.exceptionCode) {
        const exceptionBlock = document.createElement('div');
        exceptionBlock.className = 'mb-12 p-4 bg-red-50 text-sm';
        exceptionBlock.innerHTML = `
            <div class="text-red-600 uppercase mb-2">${latestEvent.additional.exceptionDesc}</div>
            <div class="text-red-600">${latestEvent.notes}</div>
        `;
        
        // Insert exception block after the header section and before the timeline
        const timelineElement = document.getElementById('timeline');
        timelineElement.parentNode.insertBefore(exceptionBlock, timelineElement);
    }

    // Display events in reverse chronological order
    const timeline = document.getElementById('timeline');
    data.events.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'relative pl-8 pb-12';
        
        // Add dot marker
        const dot = document.createElement('div');
        dot.className = 'absolute left-0 top-2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-black';
        eventDiv.appendChild(dot);
        
        const date = new Date(event.when).toLocaleString();
        // const notes = event.notes ? `<div class="text-sm text-black/60 mt-2 italic">${event.notes}</div>` : '';
        const notes = event.notes ? `<div class="text-sm ${event.additional?.exceptionCode ? 'text-red-600' : 'text-black/60'} mt-2 italic">${event.notes}</div>` : '';
        
        eventDiv.innerHTML += `
            <div class="text-xs text-black/60">${date}</div>
            <div class="mt-1">${event.what}</div>
            <div class="mt-1">${event.where}</div>
            ${notes}
        `;
        
        timeline.appendChild(eventDiv);
    });
}