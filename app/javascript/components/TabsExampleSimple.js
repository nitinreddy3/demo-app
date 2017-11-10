import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import SearchBar from 'material-ui-search-bar';
import { GridList, GridTile } from 'material-ui/GridList';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
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
		bottom: 0
	}
};

class TabsExampleSimple extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gridView: true,
			listView: false,
			value: 2,
			isOpen: false
		};
		injectTapEventPlugin();
		this.setGridView = this.setGridView.bind(this);
		this.setListView = this.setListView.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	setGridView() {
		this.setState({ gridView: true, listView: false });
	}

	setListView() {
		this.setState({ gridView: false, listView: true });
	}

	handleChange(event, index, value) {
		this.setState({ value });
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
										<p>this is a grid view</p>
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
										<DropDownMenu value={this.state.value} onChange={this.handleChange}
											style={styles.dropDownMenu} openImmediately={false}>
											<MenuItem value={1} primaryText="Never" />
											<MenuItem value={2} primaryText="Every Night" />
											<MenuItem value={3} primaryText="Weeknights" />
											<MenuItem value={4} primaryText="Weekends" />
											<MenuItem value={5} primaryText="Weekly" />
										</DropDownMenu>
									</div>
									<div>
										<label style={styles.label}>Content Type</label>
										<DropDownMenu value={this.state.value} onChange={this.handleChange}
											style={styles.dropDownMenu} openImmediately={false}>
											<MenuItem value={1} primaryText="Never" />
											<MenuItem value={2} primaryText="Every Night" />
											<MenuItem value={3} primaryText="Weeknights" />
											<MenuItem value={4} primaryText="Weekends" />
											<MenuItem value={5} primaryText="Weekly" />
										</DropDownMenu>
									</div>
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
								onClick={this.hideModal}/>
							<RaisedButton className="pull-right" label="Upload" primary={true}
							style={styles.raisebutton}/>
						</ModalFooter>
					</Modal>
				</Tab>
			</Tabs>
		)
	}
};

export default TabsExampleSimple;