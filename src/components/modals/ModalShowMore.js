import React from 'react';
import ModalShowMoreHeader from './ModalShowMoreHeader';

class ModalShowMore extends React.Component {
	render() {
		const { tasks, showMoreModal, showMoreModalToggle } = this.props;

		//Trim the task data
		let key = showMoreModal.modalIndex;
		let data = tasks.tasks[key];

		//Show or hide the modal logic
		let showMoreClass = ()=> {
			if (!showMoreModal.open) {
				return 'hide-element';
			}
			return 'show-element';
		};

		return (
			<div className={`custom-modal ${showMoreClass()}`}>
				<section role="dialog" tabIndex="-1" className="slds-modal slds-fade-in-open">
					<div className="slds-modal__container">

						<ModalShowMoreHeader />

						<div className="slds-modal__content slds-p-around--medium" id="modal-content-id-1">

							<div className="form-row">
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="text-input-01">Task Name</label>
									<div className="slds-form-element__control">
										<input type="text" id="text-input-01" className="slds-input" placeholder={data.name} />
									</div>
								</div>
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="select-02">Priority</label>
									<div className="slds-form-element__control">
										<div className="slds-select_container">
											<select className="slds-select" id="select-01">
												<option>High</option>
												<option>Medium</option>
												<option>Large</option>
											</select>
										</div>
									</div>
								</div>
							</div>

							<div className="form-row">
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="text-input-03">Assigned To</label>
									<div className="slds-form-element__control">
										<input type="text" id="text-input-03" className="slds-input" placeholder="Luis Davis" />
									</div>
								</div>
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="text-input-04">Days Until Due</label>
									<div className="slds-form-element__control">
										<input type="text" id="text-input-04" className="slds-input" placeholder={data.days} />
									</div>
								</div>
							</div>

							<div className="form-row">
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="select-05">Category</label>
									<div className="slds-form-element__control">
										<div className="slds-select_container">
											<select className="slds-select" id="select-05">
												<option>Phone Call</option>
												<option>Email</option>
												<option>Misc</option>
											</select>
										</div>
									</div>
								</div>
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="text-input-06">Task Dependency</label>
									<div className="slds-form-element__control">
										<input type="text" id="text-input-06" className="slds-input" placeholder={data.dependentParentName} />
									</div>
								</div>
							</div>

							<div className="form-row">
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="text-input-07">Editable by</label>
									<div className="slds-form-element__control">
										<input type="text" id="text-input-07" className="slds-input" placeholder={data.edit} />
									</div>
								</div>
								<div className="slds-form-element">
									<label className="slds-form-element__label" htmlFor="text-input-08">Task Dependency</label>
									<div className="slds-form-element__control">
										<input type="text" id="text-input-08" className="slds-input" placeholder="None" />
									</div>
								</div>
							</div>

						</div>
						<footer className="slds-modal__footer">
							<button className="slds-button slds-button--neutral" onClick={() => showMoreModalToggle()}>Cancel</button>
							<button className="slds-button slds-button--brand">Save</button>
						</footer>
					</div>
				</section>
				<div className="slds-backdrop slds-backdrop--open"></div>
			</div>
		)
	}
}

export default ModalShowMore;