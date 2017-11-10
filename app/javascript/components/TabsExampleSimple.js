import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import SearchBar from 'material-ui-search-bar';
import { GridList, GridTile } from 'material-ui/GridList';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {
	Modal,
	ModalHeader,
	ModalTitle,
	ModalClose,
	ModalBody,
	ModalFooter
} from 'react-modal-bootstrap';

const styles = {
	subMenus: {
		padding: 10
	},
	subMenu: {
		marginBottom: 10
	},
	label: {
		marginLeft: 24,
		display: 'block'
	},
	customWidth: {
		width: 200,
	},
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
		marginTop: 12
	},
	tabContainer: {
		padding: 10,
		backgroundColor: 'white',
		marginTop: 12
	},
	buttonWrapper: {
		padding: 20,
		borderBottom: '1px solid grey'
	},
	searhBar: {
		width: 200,
		float: 'left',
		marginLeft: 20,
	},
	raisebutton: {
		float: 'left',
		height: 50
	},
	defaulticon: {
		color: 'grey',
		fontSize: 35,
		marginLeft: 10
	},
	activeGrid: {
		color: '#00bcd4',
		fontSize: 35,
		marginLeft: 10
	},
	mainGridContainer: {
		marginTop: 20
	},
	dropDownMenu: {
		borderRadius: 5,
		border: '1px solid grey',
		bottom: 0,
		width: 200
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 750,
		height: 450,
		overflowY: 'auto',
	},
};
const tilesData = [
	{
		img: 'https://avatars2.githubusercontent.com/u/5886208?s=400&u=ba6320cbceb56da5407f4b233530e6672c7f4741&v=4',
		title: 'Breakfast',
		author: 'jill111',
	},
	{
		img: 'https://avatars1.githubusercontent.com/u/110953?s=460&v=4',
		title: 'Tasty burger',
		author: 'pashminu',
	},
	{
		img: 'https://avatars1.githubusercontent.com/u/591643?s=460&v=4',
		title: 'Camera',
		author: 'Danson67',
	},
	{
		img: 'https://avatars0.githubusercontent.com/u/306?s=460&v=4',
		title: 'Morning',
		author: 'fancycrave1',
	}
];
class TabsExampleSimple extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gridView: true,
			listView: false,
			value1: 1,
			value2: 6,
			isOpen: false
		};
		injectTapEventPlugin();
		this.setGridView = this.setGridView.bind(this);
		this.setListView = this.setListView.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	setGridView() {
		this.setState({ gridView: true, listView: false });
	}

	setListView() {
		this.setState({ gridView: false, listView: true });
	}

	handleChange1(event, index, value) {
		this.setState({ value1: value });
	}

	handleChange2(event, index, value) {
		this.setState({ value2: value });
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	hideModal() {
		this.setState({ isOpen: false });
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				disabled={true}
				onClick={this.handleClose}
			/>,
		];
		return (
			<Tabs>
				<Tab label="My Files">
					<div className="tabContainer" style={styles.tabContainer}>
						<div className="clearfix" style={styles.buttonWrapper}>
							<div className="pull-left clearfix">
								<RaisedButton label="Upload File" primary={true}
									style={styles.raisebutton} onClick={this.openModal} />
								<SearchBar
									onChange={() => console.log('onChange')}
									onRequestSearch={() => console.log('onRequestSearch')}
									style={styles.searhBar} />
							</div>
							<i className="fa fa-th-large pull-right" aria-hidden="true"
								style={this.state.gridView ? styles.activeGrid : styles.defaulticon} onClick={this.setGridView}></i>
							<i className="fa fa-bars pull-right" aria-hidden="true"
								style={this.state.listView ? styles.activeGrid : styles.defaulticon} onClick={this.setListView}></i>
						</div>
						<div className="mainGridContainer clearfix" style={styles.mainGridContainer}>
							<div className="col-md-9">
								{
									this.state.gridView && (<div className="gridView">
										<div style={styles.root}>
											<GridList
												cellHeight={180}
												style={styles.gridList}
												cols={3}
											>
												{tilesData.map((tile) => (
													<GridTile
														key={tile.img}
														title={tile.title}
														subtitle={<span>by <b>{tile.author}</b></span>}
														actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
													>
														<img src={tile.img} />
													</GridTile>
												))}
											</GridList>
										</div>
									</div>)
								}
								{
									this.state.listView && (<div className="listView">
										<p>this is a list view</p>
									</div>)
								}
							</div>
							<div className="col-md-3">
								<div style={styles.subMenus}>
									<div style={styles.subMenu}>
										<label style={styles.label}>Uploader</label>
										<DropDownMenu value={this.state.value1} onChange={this.handleChange1}
											style={styles.dropDownMenu} openImmediately={false}>
											<MenuItem value={1} primaryText="gtererere" />
											<MenuItem value={2} primaryText="gtererere Night" />
											<MenuItem value={3} primaryText="gtererere" />
											<MenuItem value={4} primaryText="gterereresds" />
											<MenuItem value={5} primaryText="gterereresdsd" />
										</DropDownMenu>
									</div>
									<div>
										<label style={styles.label}>Content Type</label>
										<DropDownMenu value={this.state.value2} onChange={this.handleChange2}
											style={styles.dropDownMenu} openImmediately={false}>
											<MenuItem value={6} primaryText="Never" />
											<MenuItem value={16} primaryText="Every Night" />
											<MenuItem value={52} primaryText="Weeknights" />
											<MenuItem value={43} primaryText="gterereresds" />
											<MenuItem value={32} primaryText="Weekly" />
										</DropDownMenu>
									</div>
									<RaisedButton label="Create New Folder" onClick={this.openModal}/>
								</div>
							</div>
						</div>
					</div>
					<Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
						<ModalHeader>
							<ModalClose onClick={this.hideModal} />
							<ModalTitle>Upload File</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
							explicabo hic incidunt placeat quasi repellendus soluta,
							vero. Autem delectus est laborum minus modi molestias
							natus provident, quidem rerum sint, voluptas!</p>
						</ModalBody>
						<ModalFooter>
							<FlatButton className="pull-right" label="Cancel" primary={true}
								onClick={this.hideModal} />
							<RaisedButton className="pull-right" label="Upload" primary={true}
								style={styles.raisebutton} />
						</ModalFooter>
					</Modal>
				</Tab>
			</Tabs>
		)
	}
};

export default TabsExampleSimple;