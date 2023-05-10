import { Heading, Text } from './Text'
import { ModuleView } from '~/views/module';
import { IconTV } from './Icon';
import { FrontpanelLegend } from './FrontpanelLegend';
import { FrontpanelMaterial } from './Frontpanel';

export function ModuleDetails({
  moduleData
}: {
  moduleData: ModuleView;
}) {
  var it = 0;
  var it2 = 0;

  return (
    <div>
      {/* <div className="inline-block w-full h-4"></div> */}
      <Text size="copy">{moduleData.description}</Text>
      <div className="inline-block w-full h-2"></div>
      <div className="inline-block w-full align-top">
        {moduleData.features.map((feature) => {
          return (
            <>
              <div className="inline-block w-full"><IconTV className="inline-block align-middle" /> <Text size="lead" className="align-middle">{feature.name}</Text></div>
              <div className="inline-block w-full"><Text size="copy" color="subtle">{feature.description}</Text></div>
              <div className="inline-block w-full h-2"></div>
            </>)
        })}
      </div>
      <div className="inline-block w-1/2 align-top">
        <Heading as="h3" format size="copy" className="uppercase">Dimensions</Heading>
        <ul>
          <li><Text size="copy" color="subtle">{'Width, ' + moduleData.hp + 'HP'}</Text></li>
          <li><Text size="copy" color="subtle">{'Mounting Depth, ' + moduleData.mounting_depth_mm + 'mm'}</Text></li>
        </ul>

        <div className="inline-block w-full h-2"></div>
        <Heading as="h3" format size="copy" className="uppercase">Video Sync</Heading>
        <ul>
          {moduleData.has_rear_video_sync_input == true ?
            <li><Text size="copy" color="subtle">Rear RCA Sync Input Jack</Text></li> : ''
          }
          {moduleData.has_rear_video_sync_output == true ?
            <li><Text size="copy" color="subtle">Rear RCA Sync Output Jack</Text></li> : ''
          }
          {moduleData.has_front_video_sync_input == true ?
            <li><Text size="copy" color="subtle">Front RCA Sync Input Jack</Text></li> : ''
          }
          {moduleData.has_front_video_sync_output == true ?
            <li><Text size="copy" color="subtle">Front RCA Sync Output Jack</Text></li> : ''
          }
          {moduleData.has_eurorack_power_sync_input == true ?
            <li><Text size="copy" color="subtle">Rear EuroRack Power Header Sync Input (CV/Gate Bus)</Text></li> : ''
          }
          {moduleData.has_eurorack_power_sync_output == true ?
            <li><Text size="copy" color="subtle">Rear EuroRack Power Header Sync Output (CV/Gate Bus)</Text></li> : ''
          }
          {moduleData.has_rear_14_pin_sync_input == true ?
            <li><Text size="copy" color="subtle">Rear 14 Pin Header Sync Input</Text></li> : ''
          }
          {moduleData.has_rear_14_pin_sync_output == true ?
            <li><Text size="copy" color="subtle">Rear 14 Pin Header Sync Output</Text></li> : ''
          }
        </ul>
        <div className="inline-block w-full h-2"></div>
        {moduleData.is_sync_ref_required == true ?
          <Text size="copy" color="subtle">Connection to a video sync ref is required to use this module.</Text> :
          <Text size="copy" color="subtle">No video sync connections are required to use this module.</Text>
        }
      </div>
      <div className="inline-block w-1/2 align-top">
        <Heading as="h3" format size="copy" className="uppercase">Power Consumption</Heading>
        <ul>
          {moduleData.max_pos_12v_ma !== 0 ?
            <li><Text size="copy" color="subtle">{'+12V @ ' + moduleData.max_pos_12v_ma + 'mA'}</Text></li> : ''
          }
          {moduleData.max_neg_12v_ma !== 0 ?
            <li><Text size="copy" color="subtle">{'-12V @ ' + moduleData.max_neg_12v_ma + 'mA'}</Text></li> : ''
          }
        </ul>
        <div className="inline-block w-full h-2"></div>
        <Heading as="h3" format size="copy" className="uppercase">Power Entry</Heading>
        <ul>
          {moduleData.has_dc_barrel_power_entry == true ?
            <li><Text size="copy" color="subtle">Rear DC Barrel Jack</Text></li> : ''
          }
          {moduleData.has_eurorack_power_entry == true ?
            <li><Text size="copy" color="subtle">Rear EuroRack 16 Pin Header</Text></li> : ''
          }
        </ul>
      </div>
      <div className="inline-block w-full h-2"></div>
      <div className="inline-block w-1/2 align-top">
        <Heading as="h3" format size="copy" className="uppercase">Legend</Heading>
        <FrontpanelLegend pixelsPerHP={20} module={moduleData} />
      </div>
      <div className="inline-block w-1/2 align-top">
        {/* {moduleData.legend ? <img className="w-1/2 max-w-96" src={'/images/' + moduleData.legend}/> : null} */}
        {/* {moduleData.legend ? <img className="w-1/2 max-w-96" src={'/images/' + moduleData.legend}/> : null} */}
        {moduleData.connectors.length > 0 ? <Heading as="h3" format size="copy" className="uppercase">Connectors</Heading> : null}
        {moduleData.connectors.length > 0 ? moduleData.connectors.map((conn, it) => {
          it = it + 1
          return (
            <>
              <div className="w-full inline-block">
                <div className="w-1/12 inline-block">
                  <Text color="subtle">
                    {conn.refDes}
                  </Text>
                </div>
                <div className="w-11/12 inline-block">
                  <Text color="subtle">
                    {conn.name} {conn.is_input ? 'Input' : 'Output'}
                  </Text>
                </div>
              </div>
            </>)
        }) : null}
        {moduleData.connectors.length > 0 ? <div className="inline-block w-full h-2"></div> : null}
        {moduleData.controls.length > 0 ? <Heading as="h3" format size="copy" className="uppercase">Controls</Heading> : null}
        {moduleData.controls.length > 0 ? moduleData.controls.map((ctrl, it) => {
          it2 = it2 + 1
          return (
            <>
              <div className="w-full inline-block align-top">
                <div className="w-1/12 inline-block align-top">
                  <Text color="subtle">
                    {ctrl.refDes + " "} 
                  </Text>
                </div>
                <div className="w-11/12 inline-block align-top">
                  <Text color="subtle">
                    {" " + ctrl.name}
                  </Text>
                </div>
              </div>
            </>)
        }) : null}
      </div>
      <div className="inline-block w-full h-2"></div>
    </div>
  )
};


