//ピンクのヒヨコの行動パターン ####################################################
import { player } from '../../init/variables';
import { enemyBullet } from './enemyBullet';

export const enemyMovePink = (object: any) => {
	if (!object.flag) {
		//一度攻撃する前の処理
		if (object.x < player.x && object.vx < 120) {
			// プレイヤーより左にいる、かつ、x軸のベクトル量が120以内なら
			// 右に進む（プレイヤーのいる方に進む）
			object.vx += 4;
		} else if (object.vx > -120) {
			// プレイヤーより右にいる、かつ、x軸のベクトル量が-120以上なら
			// 左に進む（プレイヤーのいる方に進む）
			object.vx -= 4;
		}
	} else {
		// 攻撃した後の処理
		if (player.x < object.x && object.vx < 400) {
			// player <- objectの配置なら
			// <- object <- player のようにplayerを通過して場外へ逃げる
			object.vx -= 30;
		} else if (object.vx > -400) {
			//反対
			object.vx += 30;
		}
	}

	if (Math.abs(player.y - object.y) < 190 << 8 && !object.flag) {
		object.flag = true;

		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(object, 1000, -10, 10);
	}

	if (object.flag && object.vy > -500) {
		object.vy -= 30;
	}

	//スプライトの変更
	//スプライトのパターン（アニメーションを表現）
	const ptn = [39, 40, 39, 41];
	// const ptn = [78, 78, 78, 78];
	object.snum = ptn[(object.count >> 3) & 3];
};
