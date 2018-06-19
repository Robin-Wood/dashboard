/*
 * Nextcloud - Dashboard App
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author regio iT gesellschaft für informationstechnologie mbh
 * @copyright regio iT 2017
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


var net = {

	getWidgets: function (callback) {
		var res = {status: -1};

		$.ajax({
			method: 'GET',
			url: OC.generateUrl('/apps/dashboard/widgets')
		}).done(function (res) {
			net.onCallback(callback, res);
		}).fail(function () {
			// net.failedToAjax();
			net.onCallback(callback, res);
		});
	},

	saveGrid: function (data, callback) {
		var res = {status: -1};

		$.ajax({
			method: 'POST',
			url: OC.generateUrl('/apps/dashboard/widgets/grid'),
			data: {
				grid: JSON.stringify(data)
			}
		}).done(function (res) {
			net.onCallback(callback, res);
		}).fail(function () {
			// net.failedToAjax();
			net.onCallback(callback, res);
		});

	},

	onCallback: function (callback, result) {
		if (callback && (typeof callback === 'function')) {
			if (typeof result === 'object') {
				callback(result);
			} else {
				callback({status: -1});
			}

			return true;
		}

		return false;
	}
};


