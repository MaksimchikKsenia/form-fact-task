import {  useState } from "react";
import Fact from './components/Fact/Fact';
import Form from './components/Form/Form';
import {
  View,
  Panel,
  PanelHeader,
  Group,
  CellButton
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default function App() {
    const [activePanel, setActivePanel] = useState('panel1');

  return (

<View activePanel={activePanel}>
  <Panel id="panel1">
    <PanelHeader>Fact</PanelHeader>
    <Group>
      <Fact/>
      <CellButton onClick={() => setActivePanel('panel2')}>Go to Form</CellButton>
      
    </Group>
  </Panel>
  <Panel id="panel2">
    <PanelHeader>Form</PanelHeader>
    <Group>
      <Form/>
      <CellButton onClick={() => setActivePanel('panel1')}>Go to Fact</CellButton>
    </Group>
  </Panel>
  
</View>
  );
}
