import { EnemyMaster } from '../classes/EnemyMaster';
import { Enemy } from '../classes/Enemy';
import { Player } from '../classes/Player';
import { ItemMaster } from '../classes/ItemMaster';
import { Explosion } from '../classes/Explosion';
import { EnemyShot } from '../classes/EnemyShot';
import { Item } from '../classes/Item';

// ******************************* 定数 *******************************

export const scoreSubmit = document.getElementById('score-submit');
export const logoutButton = document.getElementById('logout-button');

// export const  info: boolean = true;
export const debug = false;

//認証画面の表示をゲームの終了後のみにする
export const afterGame = document.getElementById('after-game');

//スムージング
export const SMOOOTHING = false;

//画面サイズ
export const screen_w = 360;
export const screen_h = 500;

//キャンバスのサイズ
export const canvas_w = screen_w * 2;
export const canvas_h = screen_h * 2;

//フィールドのサイズ
export const field_w = screen_w + 120;
export const field_h = screen_h + 120;

//キャンバス
export const canvas: any = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

//フィールド（仮想画面）
export const vcanvas = document.createElement('canvas');
export const vctx = vcanvas.getContext('2d');

//星の数
export const star_max = 300;

//自機の情報
export const player = new Player();

//アイテムの種類
export const itemMaster = [new ItemMaster(0, 10, 1), new ItemMaster(1, 10, 2)];

//ゲームスピード
export const gameSpeed = 1000 / 60;

//敵キャラの種類
export const enemyMaster = [
	new EnemyMaster(0, 10, 1, 100), //ピンクのヒヨコ
	new EnemyMaster(1, 10, 1, 100), //黄色のヒヨコ
	new EnemyMaster(2, 70, 1000, 10000), //ボスヒヨコ（黄色）
	new EnemyMaster(3, 15, 5, 10), //ボスヒヨコ（黄色）の子供
];

// 変更がなされるのは配列の中身であり、本質的な変数の書き換えが行われないので、
// 以下のインスタンスの配列はvarsに含める必要が無い。
// (むしろ各配列がvarsの役割を果たしていると言ったほうがニュアンスとしては正しいとも言える)

export const star: any[] = [];
//キーボードの状態
export const key: boolean[] = [];
//銃弾
export const bullet: any = [];
//敵キャラ
export const enemy: Enemy[] = [];
//アイテム
export const item: Item[] = [];
//敵の攻撃
export const enemyShot: EnemyShot[] = [];
//爆発の情報

export const explosion: Explosion[] = [];

// ******************************* 変数 *******************************

// 複数箇所で書き換えが行われる変数
export const vars = {
	// スコア
	score: 0,
  // score's judgeing
  sub_score: 0,
	// ボスのHP
	bossHp: 0,
	// ボスのHPのマックス値
	bossMhp: 0,
	drawCount: 0,
	// 経過したfps
	fps: 0,
	lastTime: Date.now(),
	//ゲームスタートのためにユーザがスペースを押したかどうかを感知する
	isPushedSpace: false,
	//ゲームスタートフラグ
	gameStart: false,
	//ゲームが始まる前のカウント
	gameStartCount: 3,
	//ゲームオーバーフラグ
	gameOver: false,
	//ゲームクリアフラグ
	gameClear: false,
	//データベースの呼び出し回数
	callData: 0,
	//カメラの座標
	camera_x: 0,
	camera_y: 0,
	//入力欄にフォーカスがあるときは、Rでのリロードをキャンセルする
	inputOnFocus: true,
	//右クリックの回数を数える
	rightClick: 0,
	//ボスの出現フラグ
	bossEncount: false,
	//ゲーム全体の経過フレーム
	gameTimer: 0,
	//ゲームのカウント（経過フレームをウェイブ毎に持つ）
	gameCount: 0,
	//ゲームのウェイブ（段階）
	gameWave: 0,
	//ゲームのラウンド数（ボスを倒した数）
	gameRound: 0,
	//背景の星の速度
	starSpeed: 100,
	//要求する星の速度
	starRequest: 100,
};
