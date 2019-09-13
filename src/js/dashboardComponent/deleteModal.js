import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class DeleteModal extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ stores, actions }) => {
					return (
						<div
							className="modal fade"
							id="deleteAlert"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											Modal title
										</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">...</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
										<button type="button" className="btn btn-primary">
											Save changes
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
